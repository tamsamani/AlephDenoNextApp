var _s = $RefreshSig$();
/*#__PURE__*/ import React from "../-/esm.sh/react@17.0.2.js";
async function getTitle() {
    try {
        const response = await fetch('/api/');
        if (response.ok) {
            return {
                data: await response.json(),
                type: 'data',
                status: "success"
            };
        } else throw {
            error: response,
            type: 'response'
        };
    } catch (error) {
        throw {
            type: 'data',
            ...error,
            status: 'error'
        };
    }
}
export default function IndexPage() {
    _s();
    const [title, setTitle] = React.useState('Loading...');
    React.useEffect(()=>{
        // load api message
        getTitle().then((result)=>setTitle(result.data.message)
        ).catch(({ error  })=>setTitle(error.statusText || error.status)
        );
    }, []);
    return React.createElement("div", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 33
        }
    }, React.createElement("h3", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 34
        }
    }, title), React.createElement("p", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 35
        }
    }, "Hello"));
};
_s(IndexPage, "XnUq9DOLmRC3F7C7yM114R4VGLM=");
_c = IndexPage;
var _c;
$RefreshReg$(_c, "IndexPage");

//# sourceMappingURL=index.js.map