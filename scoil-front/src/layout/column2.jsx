import Avatar from "@/components/column2/avatar";
import Head from "next/head"

const Column2 = ( { title, config = <></>, items = <></>, user = null, children, size = "64px", sizeText = "35px", maxHeight = '232px'  } ) => {
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="nk-chat bg-white flex max-h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] overflow-hidden relative">
            <div className="nk-chat-aside w-96 bg-white rounded-bl-sm rounded-tl-sm flex flex-col flex-shrink-0 max-h-full overflow-hidden relative">
                <div className="nk-chat-aside-head px-7 items-center flex justify-between py-[26px]">
                    <div className="nk-chat-aside-user inline-flex whitespace-nowrap items-center">
                        <div className="mx-4 text-[30px] text-libellum-title font-bold">{title}</div>
                    </div>
                </div>
                <div className="nk-chat-aside-body h-full max-h-full content-start items-start flex-col flex-wrap justify-start relative overflow-auto">
                    <div className="simple-bar-wrapper overflow-hidden">
                        <div className="simple-mask bottom-0 left-0 absolute right-0 top-0 m-0 p-0">
                            <div className="simplebar-offset top-0 left-0 w-full resize-none absolute m-0 p-0">
                                <div className="simplebar-content-wrapper h-full block max-h-full max-w-full relative visible box-border pb-4">
                                    { items }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[calc(100%-383px)] h-[100vh-68px] bg-chat-bg">
                { user && (
                    <div className="headerMessage px-10 py-[18px] border-b border-b-gray_alter bg-white flex items-center justify-between">
                        <div className="flex w-full items-center justify-start">
                            <div className="mr-3"><Avatar user={user} size={size} sizeText={sizeText} /></div>
                            <div className="text-left">
                                <div className="text-libellum-title text-lg font-bold">{user.name} {user.lastname}</div>
                                <div className="text-body-chat text-sm">{user.rol}</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-x-2 pr-4">
                            { config }
                        </div>
                    </div>
                )}
                <div className={`chatBody overflow-auto h-full`} style={{maxHeight: maxHeight}}>
                    { children }
                </div>
            </div>
        </div>
    </>
}

export default Column2;