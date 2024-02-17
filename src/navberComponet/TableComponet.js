const TableComponet = () => {
    return (
        <>
            <div className="container">
                <div className="table-conatner">



                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <p className="product-sell">product-sell</p>
                            <form class="d-flex">
                                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <p class="Last-30-day">Last 30 Day</p>
                            </form>
                        </div>
                    </nav>
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <p className="product-Name">product Name</p>
                            <form class="d-flex">
                                <p className="Stock">Stock</p>
                                <p className="Stock">Price</p>
                                <p className="Stock">Total-sale</p>
                            </form>
                        </div>
                    </nav>



                </div>
            </div>
        </>
    )
}
export default TableComponet;