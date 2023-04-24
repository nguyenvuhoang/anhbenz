import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Custom400 from "./400";

type PageProps = {
    statusCode: number
}

function Error({ statusCode }: PageProps) {
    const router = useRouter();

    // Nếu trang lỗi là 400, chuyển hướng đến trang lỗi tùy chỉnh
    if (statusCode === 400) {
        return <Custom400 />;
    }

    // Nếu trang lỗi không phải là 400, hiển thị trang lỗi mặc định
    return <ErrorPage statusCode={statusCode} />;
}

export default Error;