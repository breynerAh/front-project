import { Avatar, IconButton } from "@mui/material";
import { BoxUI } from "@repo/ui";
import { FC } from "react";

export const AvatarComponent: FC<{
  openListOption: boolean;
  handleClickListOption: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ handleClickListOption, openListOption }) => {
  return (
    <BoxUI>
      <IconButton
        onClick={handleClickListOption}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={openListOption ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openListOption ? "true" : undefined}
      >
        <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
      </IconButton>
    </BoxUI>
  );
};
