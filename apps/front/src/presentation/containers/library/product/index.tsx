import { BoxUI, CarouselUI, GridUI } from "@repo/ui";

export const ProductContainer = () => {
  const slides = [
    {
      imageUrl:
        "https://res.cloudinary.com/ariscloud/image/upload/v1734011186/samples/cloudinary-group.jpg",
      caption: "Slide 1",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1501082183835-b7b33db89c3f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFub3IlQzMlQTFtaWNvfGVufDB8fDB8fHww",
      caption: "Slide 2",
    },
    {
      imageUrl: "https://i.blogs.es/ceda9c/dalle/1366_2000.jpg",
      caption: "Slide 3",
    },
  ];
  return (
    <BoxUI sx={{ height: "100%", flexDirection: "column" }}>
      <GridUI sx={{ height: "20%" }}>
        <h1>Bienvenido a la Página Principal</h1>
        <CarouselUI slides={slides} />
      </GridUI>
      <GridUI sx={{ height: "80%" }}>asdf</GridUI>
    </BoxUI>
  );
};
