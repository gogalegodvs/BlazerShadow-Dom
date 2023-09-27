
export function attachShadowDom(elementId) {
    const host = document.getElementById(elementId);

    if (!host.shadowRoot) {

        const shadowRoot = host.attachShadow({ mode: "open" });

        shadowRoot.innerHTML = `
            <style>

                * {
                    font-size: 20px;
                    background-color: lightyellow;
                }

                 .newDom{
                    height:50px:
                    width:100%;
                }

        
            </style >
            <div class="newDOM">
                HTML
            </div>
        `;
    }

};
