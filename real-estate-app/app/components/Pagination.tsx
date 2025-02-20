const Pagination = ({ page, setPage }:any) => {
    return (
      <div>
        <button onClick={() => setPage(page - 1)}>Anterior</button>
        <button onClick={() => setPage(page + 1)}>Próximo</button>
      </div>
    );
  }

  export default Pagination