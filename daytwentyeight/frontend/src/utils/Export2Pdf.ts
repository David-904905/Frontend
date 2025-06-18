import html2pdf from "html2pdf.js";

export const exportToPDF = (filename: string) => {
    const editorElement = document.querySelector(".editor-content") as HTMLElement | null;

    if (editorElement) {
        html2pdf()
            .set({
                margin: 10,
                filename: filename,
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            })
            .from(editorElement)
            .save();
    }
};
