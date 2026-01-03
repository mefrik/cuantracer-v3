import { Box, Typography } from "@mui/material";

export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Box textAlign="center" py={6} opacity={0.7}>
      <Typography variant="h6">{title}</Typography>
      {description && <Typography variant="body2">{description}</Typography>}
    </Box>
  );
}
