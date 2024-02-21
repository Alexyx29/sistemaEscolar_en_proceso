const modules = {
    toolbar: [
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        [{ 'color': [] }, { 'background': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    },
}
const modulesModal = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline'],
        [{ 'color': [ ]}, {'align': []} ],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ],
    clipboard: {
        matchVisual: false,
    },
}

const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'align',
    'color'
]

export { modules, formats, modulesModal }