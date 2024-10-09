import React from "react";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

function PageRouter(Component : any) {
    function ComponentPageRouterProp(props : any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentPageRouterProp;
}

export default PageRouter;