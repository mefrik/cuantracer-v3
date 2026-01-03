import { Skeleton, Stack } from "@mui/material";

export default function TableSkeleton() {
  return (
    <Stack spacing={1}>
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} height={48} />
      ))}
    </Stack>
  );
}
