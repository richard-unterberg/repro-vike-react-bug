interface PaginationProps {
  page: number
  pageCount: number
  pageSize: number
  setPage: (page: number) => void
  setPageSize: (pageSize: number) => void
}

const Pagination = ({ page, pageCount, pageSize, setPage, setPageSize }: PaginationProps) => (
  <div className="bg-light @dark:bg-black justify-between flex gap-3 items-center p-3 mb-5">
    <div className="flex gap-2">
      <button
        className="@dark:bg-dark bg-primary py-1 px-2"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        type="button"
      >
        Prev
      </button>
      <button
        className="@dark:bg-dark bg-primary py-1 px-2"
        onClick={() => setPage(page + 1)}
        disabled={page === pageCount}
        type="button"
      >
        Next
      </button>
    </div>

    <div className="flex gap-1 items-center text-grayLight">
      Page:
      <select
        className="bg-light text-dark @dark:bg-gray py-1 px-2 @dark:text-light"
        value={page}
        onChange={e => {
          setPage(Number(e.target.value))
        }}
      >
        {Array.from(Array(pageCount).keys()).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      / {pageCount}
    </div>
    <div className="@dark:bg-black flex gap-3 items-center">
      <select
        className="bg-white border-gray border-1 @dark:bg-gray py-1 px-2 @dark:text-light"
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
          setPage(1)
        }}
      >
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="150">150</option>
        <option value="200">200</option>
      </select>
      <div className="text-gray @dark:text-grayLight">items per page</div>
    </div>
  </div>
)

export default Pagination
