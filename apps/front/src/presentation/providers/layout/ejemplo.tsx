import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MegaMenu = () => {
  const menuData = [
    {
      id: 1,
      name: "Negocios",
      subcategories: [
        {
          id: 101,
          name: "Finanzas y contabilidad",
          topics: ["Gestión empresarial", "Plan de negocios", "ChatGPT"],
        },
        {
          id: 102,
          name: "Gestión empresarial",
          topics: ["Estrategia de negocios", "Negocios en línea", "Liderazgo"],
        },
      ],
    },
    {
      id: 2,
      name: "Desarrollo personal",
      subcategories: [
        {
          id: 201,
          name: "Comunicación",
          topics: ["Hablar en público", "Negociación", "Confianza"],
        },
      ],
    },
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {/* Categorías principales */}
      <Paper
        sx={{
          width: "200px",
          padding: 1,
          boxShadow: 2,
        }}
      >
        <List>
          {menuData.map((category) => (
            <ListItem
              key={category.id}
              button
              onMouseEnter={() => setHoveredCategory(category)}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.08)",
                },
              }}
            >
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Subcategorías */}
      {hoveredCategory && (
        <Paper
          sx={{
            width: "250px",
            padding: 1,
            boxShadow: 2,
          }}
        >
          <Typography variant="h6" sx={{ paddingBottom: 1 }}>
            {hoveredCategory.name}
          </Typography>
          <List>
            {hoveredCategory.subcategories.map((sub) => (
              <ListItem
                key={sub.id}
                button
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.08)",
                  },
                }}
              >
                <ListItemText primary={sub.name} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      {/* Temas populares */}
      {hoveredCategory?.subcategories && (
        <Paper
          sx={{
            width: "300px",
            padding: 1,
            boxShadow: 2,
          }}
        >
          <Typography variant="h6" sx={{ paddingBottom: 1 }}>
            Temas populares
          </Typography>
          {hoveredCategory.subcategories.map((sub) => (
            <Box key={sub.id} sx={{ paddingBottom: 1 }}>
              <Typography variant="subtitle1">{sub.name}</Typography>
              <List>
                {sub.topics.map((topic, index) => (
                  <ListItem key={index} button>
                    <ListItemText primary={topic} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default MegaMenu;
