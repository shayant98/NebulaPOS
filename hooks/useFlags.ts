import { useQuery } from "react-query"
import { checkFlag } from "../services/flagService"

const useFlags = (key: string): boolean => {
    const { data, isFetched } = useQuery(["flag", key], checkFlag, {refetchOnWindowFocus: false})
    if (isFetched) {
        return !!data;
    }

}

export default useFlags;