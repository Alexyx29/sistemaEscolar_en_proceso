import Spinner from "@/assets/icons/spinner";
import dynamic from "next/dynamic";

const Editor = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <Spinner />
});

export default Editor;