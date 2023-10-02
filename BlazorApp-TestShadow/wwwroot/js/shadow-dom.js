
export function attachShadowDom(elementId,elementMove) {
    const host = document.getElementById(elementId);

    if (!host.shadowRoot) {

        const shadowRoot = host.attachShadow({ mode: "open" });

        var sourceDiv = document.getElementById(elementMove);
        shadowRoot.appendChild(sourceDiv);
    }

};
