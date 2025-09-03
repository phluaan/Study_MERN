import { notification, Table } from "antd";
import { getUserApi } from "../util/api";
import { useEffect, useState } from "react";

const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserApi();
            if(!res?.message){
                setDataSource(res.data);
            } else {
                notification.error({
                    message: "Unathorized",
                    description: res.message
                })
            }
        }
        fetchUser();
    }, []) 
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
    ];
    return <div style={{padding: 30}}>
        <Table 
            bordered
            dataSource={dataSource}
            columns={columns}
            rowKey={"_id"}/>
    </div>
}
export default UserPage;