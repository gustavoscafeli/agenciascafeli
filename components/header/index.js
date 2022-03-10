import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav class="navbar navbar-expand-sm navbar-dark">
          <Link href="/">
            <a class="navbar-brand">
              Gustavo Scafeli
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 381.32 51.84"
              >
                <g id="Camada_2" data-name="Camada 2">
                  <g id="Camada_1-2" data-name="Camada 1">
                    <path
                      class="cls-1"
                      d="M15.84,33.56c0,3.88,3.39,6,17.5,6,12.31,0,15.19-1.15,15.19-4,0-3.24-2.23-3.67-16.34-4.25-22.33-.86-31-4.46-31-16.06C1.15,4.1,12.24,0,31.61,0s30.6,4.75,30.6,17.43H46.37c0-4.11-4.89-5.12-16.2-5.12C19.44,12.31,17,13.18,17,16s2.45,3.31,15.2,3.88c19.87.94,32.18,2.16,32.18,15.2,0,13.68-12.09,16.77-31.75,16.77C12,51.84,0,48.32,0,33.56Z"
                    />
                    <path
                      class="cls-1"
                      d="M98,0c20.16,0,30.45,7.34,31.46,22.54H113.33c-.93-6.41-6-9.15-15.33-9.15-12.1,0-15.85,4.68-15.85,12.46S86,38.45,98,38.45c9.36,0,14.4-2.81,15.33-9.29h16.13c-1,15.27-11.3,22.68-31.46,22.68-22.18,0-31.69-8.85-31.69-26S75.82,0,98,0Z"
                    />
                    <path
                      class="cls-1"
                      d="M172.88,41.26h-26l-4.32,9.86h-17.5L148.54.72h22.68l23.4,50.4H177.2Zm-5-11.38-7.92-18.07-8,18.07Z"
                    />
                    <path
                      class="cls-1"
                      d="M212.76,14.11v9.08h33.12V36.58H212.76V51.12H196.92V.72H250.2V14.11Z"
                    />
                    <path
                      class="cls-1"
                      d="M269.21,13v7.49h37.44v10.8H269.21v7.49h37.44V51.12H253.37V.72h53.28V13Z"
                    />
                    <path
                      class="cls-1"
                      d="M361.88,37.73V51.12H310V.72h15.85v37Z"
                    />
                    <path class="cls-1" d="M381.32,51.12H365.47V.72h15.85Z" />
                  </g>
                </g>
              </svg> */}
            </a>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link href="/about">
                  <a class="nav-link">Sobre</a>
                </Link>
              </li>

              <li class="nav-item">
                <Link href="/clientes">
                  <a class="nav-link">Clientes</a>
                </Link>
              </li>

              <li class="nav-item">
                <Link href="/projects">
                  <a class="nav-link">Projetos</a>
                </Link>
              </li>

              {/* <li class="nav-item">
                <Link href="/blog">
                  <a class="nav-link">Blog</a>
                </Link>
              </li> */}

              <li class="nav-item">
                <Link href="/contact">
                  <a class="nav-link">Contato</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
