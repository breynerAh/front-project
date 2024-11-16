import { ThemeColor } from "@/presentation/providers/theme/theme";

export default function useUser() {
  const theme = ThemeColor();

  return { theme };
}
