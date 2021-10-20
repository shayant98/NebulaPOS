import { useQuery } from "react-query"
import { checkFlag } from "../services/flagService"

const useFlags = (key: string): boolean => {
    console.log(key
    );

    const { data, isFetched } = useQuery(["flag", key], checkFlag)
    if (isFetched) {
        console.log(data);

        return !!data;
    }

}

export default useFlags;