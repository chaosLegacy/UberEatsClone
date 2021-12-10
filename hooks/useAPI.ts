import { useState, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { actions } from '../Redux/reducer';

const apiURL = process.env.REACT_APP_API_URL;

const useAPI = () => {
    // const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const request = useCallback(
        async (
            { query, variables }: { query: any; variables?: any },
            options?: { silent: boolean }
        ) => {
            setLoading(true);

            try {
                const res = await fetch(`${apiURL}/graphql`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        variables,
                        query
                    })
                });

                const response = await res.json();

                setLoading(false);

                // If an error occurred, store it
                if (res.status >= 300 || response.errors) {
                    if (!options?.silent) {
                        // dispatch(
                        //     actions.set({
                        //         error: `${res.url}\n\n${JSON.stringify(response, null, 2)}`
                        //     })
                        // );
                    }
                    return { error: response };
                }
                return { response: response };
            } catch (error) {
                setLoading(false);
                // dispatch(
                //     actions.set({
                //         error: `${JSON.stringify(error)}`
                //     })
                // );
                return { error };
            }
        },
        [
            // dispatch
        ]
    );
    return {
        loading,
        request
    };
};

export default useAPI;