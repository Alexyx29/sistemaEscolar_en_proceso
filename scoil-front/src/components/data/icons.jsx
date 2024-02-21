const dictionaryIcons = (icon) => {
    const icons = {
        "doc": "ico_doc.svg",
        "docx": "ico_doc.svg",
        "xls": "ico_xls.svg",
        "xlsx": "ico_xls.svg",
        "pdf": "ico_pdf.svg",
        "zip": "ico_zip.svg",
        "gif": "ico_gif.svg",
        "jpg": "ico_jpg.svg",
        "jpeg": "ico_jpg.svg",
        "txt": "ico_txt.svg",
        "png": "ico_png.svg",
    }
    return icons[icon] || "ico_doc.svg";
}

const dictionaryTypes = (icon = null) => {
    const icons = {
        "doc": ".doc, .docx",
        "docx": ".doc, .docx",
        "xls": ".xlsx, .xls",
        "xlsx": ".xlsx, .xls",
        "pdf": ".pdf",
        "zip": ".zip, .rar",
        "gif": ".gif",
        "jpg": ".jpg, .jpeg",
        "jpeg": ".jpg, .jpeg",
        "png": ".png",
        "txt": ".txt",
    }
    return icons[icon] || ".txt, .pdf, .doc, .docx, .png, .jpg, .jpeg, .xlsx, .xls, .xml, .zip, .rar, .gif";
}

export { dictionaryIcons, dictionaryTypes }