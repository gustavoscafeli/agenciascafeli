import Head from "next/head";
import "../styles/global.scss";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>

        <title>Scafeli • Agência de Publicidade</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Hey there!
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                action="https://formsubmit.co/23ed91e41cf15f5144157fa1ec30b080"
                method="POST"
              >
                <div class="mb-3">
                  <label class="form-label">Your name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    class="form-control"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">Your email address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    class="form-control"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your message
                  </label>
                  <textarea
                    class="form-control"
                    type="text"
                    name="message"
                    rows="3"
                  ></textarea>
                </div>

                <input
                  type="hidden"
                  name="_next"
                  value="https://scafeli.com/obrigado"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="Novo pedido de orçamento!"
                />

                <button type="submit" class="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
