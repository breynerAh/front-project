import { resolver, validator } from "@/common/utils";
import { CommonText } from "@/presentation/locale/commonText";
import { useTodoStore } from "@/presentation/store/todo/todoStore";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {
  BoxUI,
  ButtonActionUI,
  ControlledTextFieldUI,
  ModalUI,
  TypographyUI,
} from "@repo/ui";
import { useForm } from "react-hook-form";

export default function EditTodoContainer() {
  const message = CommonText();

  const schema = validator.object().shape({
    title: validator.string().required(message.errors.required),
  });

  const { updateTodo, todoToEdit, closeModalEdit, isOpenModalEdit } =
    useTodoStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: resolver(schema),
    values: { title: todoToEdit?.title || "" },
  });

  const handleEdit = (data: { title: string }) => {
    updateTodo(data.title);
    reset({ title: "" });
    closeModalEdit();
  };

  return (
    <ModalUI open={isOpenModalEdit} onClose={closeModalEdit} variant="sm">
      <BoxUI
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BoxUI
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TypographyUI variant="h5" sx={{ alignSelf: "flex-start" }}>
            {message.todo.edit.titleModal}
          </TypographyUI>
          <IconButton onClick={closeModalEdit}>
            <Close color="error" />
          </IconButton>
        </BoxUI>
        <ControlledTextFieldUI
          control={control}
          name="title"
          label={message.todo.edit.form.title}
          error={!!errors.title}
          helperText={errors.title?.message}
          sx={{ width: "90%", marginTop: "10px" }}
        />
        <ButtonActionUI
          text={message.words.save}
          actionType="edit"
          sx={{ marginTop: "10px", width: "90%" }}
          variant="outlined"
          onClick={handleSubmit(handleEdit)}
        />
      </BoxUI>
    </ModalUI>
  );
}
