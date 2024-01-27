
const MenuBar=()=>{
  return(
      <nav className="navbar navbar-expand-lg navbar-light px-2 d-none d-lg-flex">

          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item active">
                      <a className="nav-link" href="#">موبایل<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item px-2">
                      <a className="nav-link" href="#">لپ تاپ</a>
                  </li>
                  <li className="nav-item px-2">
                      <a className="nav-link" href="#">تبلت</a>
                  </li>
                  <li className="nav-item px-2">
                      <a className="nav-link" href="#">ساعت هوشمند</a>
                  </li>
                  <li className="nav-item px-2">
                      <a className="nav-link" href="#">هدفون و هندزفری</a>
                  </li>

                  <li className="nav-item dropdown px-2">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          لوازم جانبی موبایل
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                          <div className="dropdown-divider"></div>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                      </div>
                  </li>


                  <li className="nav-item dropdown px-2">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          گیم استور
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                          <div className="dropdown-divider"></div>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                      </div>
                  </li>


                  <li className="nav-item dropdown px-2">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          اسپیکر و ساندبار
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                          <div className="dropdown-divider"></div>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a className="dropdown-item text-center" href="#">تست</a>
                      </div>
                  </li>

                  <li className="nav-item px-2">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="nav-link" href="#">راهنمای رجیستری موبایل</a>
                  </li>

              </ul>
          </div>
      </nav>
  )
}

export default MenuBar;