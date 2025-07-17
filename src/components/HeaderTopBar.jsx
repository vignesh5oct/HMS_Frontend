const HeaderTopBar = () => {
  return (
      <div className="header-topbar">
        <div className="container">
          <div className="topbar-info">
            <div className="d-flex align-items-center gap-3 header-info">
              <p><i className="isax isax-message-text5 me-1"></i>info@example.com</p>
              <p><i className="isax isax-call5 me-1"></i>+1 66589 14556</p>
            </div>
            <ul>
              <li className="header-theme">
                <a href="javascript:void(0);" id="dark-mode-toggle" className="theme-toggle">
                  <i className="isax isax-sun-1"></i>
                </a>
                <a href="javascript:void(0);" id="light-mode-toggle" className="theme-toggle activate">
                  <i className="isax isax-moon"></i>
                </a>
              </li>
              <li className="d-inline-flex align-items-center drop-header">
                <div className="dropdown dropdown-country me-3">
                  <a href="javascript:void(0);" className="d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                  </a>
                  <ul className="dropdown-menu p-2 mt-2">
                    <li>
                      <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                        <img src="assets/img/flags/us-flag.svg" className="me-2" alt="flag" />ENG
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                        <img src="assets/img/flags/arab-flag.svg" className="me-2" alt="flag" />ARA
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                        <img src="assets/img/flags/france-flag.svg" className="me-2" alt="flag" />FRA
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-amt">
                  <a href="javascript:void(0);" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    USD
                  </a>
                  <ul className="dropdown-menu p-2 mt-2">
                    <li><a className="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                    <li><a className="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                    <li><a className="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                  </ul>
                </div>
              </li>
              <li className="social-header">
                <div className="social-icon">
                  <a href="javascript:void(0);"><i className="fa-brands fa-facebook"></i></a>
                  <a href="javascript:void(0);"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="javascript:void(0);"><i className="fa-brands fa-instagram"></i></a>
                  <a href="javascript:void(0);"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="javascript:void(0);"><i className="fa-brands fa-pinterest"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default HeaderTopBar