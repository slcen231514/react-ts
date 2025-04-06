import { Tabs } from 'antd-mobile'
import './style.css'
import { useEffect, useState } from 'react'
import { ChannelItem, fetchChannelAPI } from '@/apis/list'

const Home = () => {
    const [channels, setChannels] = useState<ChannelItem[]>([])

    useEffect(() => {
        const getChannels = async () => {
            try {
                const res = await fetchChannelAPI()
                setChannels(res.data.data.channels)
            } catch (error) {
                console.error('Channel API error:', error)
                throw error
            }
        }
        getChannels()
    }, [])


    return (
        <div>
            <div className='tabContainer'>
                {/* tab区域 */}
                <Tabs>
                    {channels.map((item) => (
                        <Tabs.Tab title={item.name} key={item.id}>
                            {/* list组件 */}
                        </Tabs.Tab>
                    ))}
                </Tabs>
            </div>
        </div>
    )
        
}

export default Home