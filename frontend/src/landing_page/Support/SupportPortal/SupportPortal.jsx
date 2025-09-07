import './SupportPortal.css';
function SupportPortal() {
    return (
        <>
            <div className="container-fluid  box ">
                <div className="row fstrow">
                    <div className="col colum-left">
                        <h2>Support Portal</h2>
                    </div>
                    <div className="col colum-right">
                        <button type="button" className="btn btn-primary ticketbtn">My Tickets</button>
                    </div>
                </div>

                <div className="row">

                    <div class="container.px-5 .mx-5 srcbox" >
                        <form class="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Eg: How do I open my account, How do i activate F&O...
" aria-label="Search" />

                        </form>
                    </div>


                </div>



            </div>

        </>
    )
}

export default SupportPortal;