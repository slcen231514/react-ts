import { DetailRes, fetchDetailAPI } from "@/apis/detail"
import { NavBar } from "antd-mobile"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Detail = () => {

    const [detail, setDetail] = useState<DetailRes | null>(null)

    // 获取路由参数
    const [params] = useSearchParams()
    const id = params.get('id')
    useEffect(() => {
        const getDetail = async () => {
            try {
                const res = await fetchDetailAPI(id!)
                setDetail(res.data.data)
                
            } catch (error) {
                console.error('Detail API error:', error)
                throw error
            }
        }
        getDetail()
    }, [id])


    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    // 数据返回前先用loading渲染
    if (!detail) {
        return <div>this is loading...</div>
    }

    // 数据返回后正式渲染
    return <div>
        <NavBar onBack={back}>{detail?.title}</NavBar>
        <div dangerouslySetInnerHTML={{
            __html: detail?.content,
        }}></div>
    </div>
}

export default Detail