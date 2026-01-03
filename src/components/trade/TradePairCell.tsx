import { Stack, Typography, Avatar } from "@mui/material";

export default function TradePairCell({ pair }: { pair: string }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Avatar
        src={`https://cryptoicons.org/api/icon/${pair
          .slice(0, 3)
          .toLowerCase()}/32`}
        sx={{ width: 20, height: 20 }}
      />
      <Typography variant="body2">{pair?.toUpperCase()}</Typography>
    </Stack>
  );
}
