import { useEffect, useState } from "react";
import SpotlightSearch from "@/components/ui/SpotlightSearch";
import TradesTable from "@/components/trade/TradesTable";
import TableSkeleton from "@/components/ui/TableSkeleton";
import EmptyState from "@/components/ui/EmptyState";
import { fetchTrades } from "@/lib/trade";

const PAGE_SIZE = 20;

export default function TradesPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    fetchTrades({
      page,
      pageSize: PAGE_SIZE,
      search,
    })
      .then((res) => {
        if (!active) return;
        setData(res.rows);
        setTotal(res.total);
      })
      .catch(console.error)
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, [search, page]);

  return (
    <>
      <SpotlightSearch
        value={search}
        onChange={(v) => {
          setSearch(v);
          setPage(1); // reset page saat search
        }}
        placeholder="Market Platform Account Pair TF Direction Status Grade"
      />

      {loading && <TableSkeleton />}

      {!loading && data.length === 0 && (
        <EmptyState
          title="No trades found"
          description={
            search
              ? "Try adjusting your search keywords"
              : "You don’t have any trades yet"
          }
        />
      )}

      {!loading && data.length > 0 && (
        <TradesTable
          data={data}
          page={page}
          pageSize={PAGE_SIZE}
          total={total}
          onPageChange={setPage}
        />
      )}
    </>
  );
}
