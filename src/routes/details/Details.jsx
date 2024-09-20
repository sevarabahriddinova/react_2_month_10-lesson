import { useParams } from "react-router-dom"
import { useGetProductDetailsQuery } from "../../redux/api/productsApi";
import { Container } from "../../utils";
import { Carousel, Typography } from 'antd';

const { Title, Text } = Typography;

const Details = () => {
    const {id} = useParams();
    const {data} = useGetProductDetailsQuery(id);
    
  return (
    <div>
        <Container>
           {
            data && data.payload &&
            <div className="flex items-center mt-10 gap-10">
            <div className="w-[400px] bg-gray-200 shadow-2xl rounded-2xl">
            <Carousel arrows >
                {
                    data && data?.payload.product_images.map(image => 
                        <img alt="example" key={image} src={image} />
                    )
                }
            </Carousel> 
            </div>
            <div className="flex flex-col">
                <Title  level={1}>{data.payload.product_name}</Title>
                <Text className="w-[500px] mt-40">{data.payload.description}</Text>
            </div>
            </div>
           }
        </Container>
    </div>
  )
}

export default Details