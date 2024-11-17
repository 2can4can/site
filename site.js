document.addEventListener('DOMContentLoaded', () => {
    function traverseDOM(node, parentCallback = null) {
        if (!node) return;

        // Содержание узла
        const content = node.nodeName.toLowerCase() +
            (node.textContent.trim() ? `: ${node.textContent.trim().slice(0, 20)}...` : '');

        // Запрос действия у пользователя
        const action = prompt(
            `Current node: ${content}\nOptions:\n(n) Next\n(b) Back\n(e) Exit`
        );

        if (action === 'n') {
            const nextNode = node.firstElementChild || node.nextElementSibling || node.parentElement?.nextElementSibling;
            if (nextNode) {
                traverseDOM(nextNode, node);
            } else {
                alert('No more nodes to traverse.');
            }
        } else if (action === 'b') {
            if (parentCallback) {
                parentCallback(node.parentElement);
            } else {
                alert('No parent node available.');
            }
        } else {
            alert('Traversal ended.');
        }
    }

    traverseDOM(document.documentElement, (parent) => traverseDOM(parent));
});
