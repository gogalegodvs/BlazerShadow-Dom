
export function attachShadowDom(elementId) {
    const host = document.getElementById(elementId);

    if (!host.shadowRoot) {

        const shadowRoot = host.attachShadow({ mode: "open" });

        var sourceDiv = document.getElementById("div-move");
        shadowRoot.appendChild(sourceDiv);
    }

};
