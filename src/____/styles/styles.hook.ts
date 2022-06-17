import { useMemo } from "react";
import css from "./styles.module.scss";

const useStyles = (): typeof css => {
    return useMemo(() => {
        return {
            ...css
        };
    }, []);
};

export { useStyles };
