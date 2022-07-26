import React, { useEffect, useState, useContext } from "react";
import { AB_GET_LIST_AUTH } from "./config/ajax-path";
import { useLocation } from "react-router-dom";
import Pagination from "./components/pagination";

import AuthContext from "./components/AuthContext";

export default function AppAuth() {
    const [data, setData] = useState({});
    const location = useLocation();
    const { authorized, sid, account, token } = useContext(AuthContext);

    const usp = new URLSearchParams(location.search);
    // usp.get('page')

    console.log(location);

    const getPageData = async (event, gotoPage) => {
        if (event) {
            event.preventDefault();
        }
        console.log({ gotoPage });

        const r = await fetch(`${AB_GET_LIST_AUTH}?page=${gotoPage}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const obj = await r.json();
        console.log(obj);
        setData(obj);
    };

    useEffect(() => {
        getPageData(null, +usp.get("page") || 1);
    }, [location]);

    return (
        <>
            {authorized ? (
                <div>
                    {data && data.totalPages ? (
                        <Pagination
                            page={data.page}
                            totalPages={data.totalPages}
                        />
                    ) : null}

                    {console.log({ data })}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">姓名</th>
                                <th scope="col">Email</th>
                                <th scope="col">手機號碼</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.rows
                                ? data.rows.map((row) => (
                                      <tr key={"mm" + row.sid}>
                                          <th scope="row">{row.sid}</th>
                                          <td>{row.name}</td>
                                          <td>{row.email}</td>
                                          <td>{row.mobile}</td>
                                      </tr>
                                  ))
                                : null}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="container">
                    <div className="alert alert-danger">請先登入</div>
                </div>
            )}
        </>
    );
}
