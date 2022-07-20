import React, { useEffect, useState } from "react";
import { AB_GET_LIST } from "./config/ajax-path";
import { Link, useLocation } from "react-router-dom";

// componentDidMount
// componentDidUpdate
// componentWillUnmount

export default function App() {
    const [data, setData] = useState({});
    const location = useLocation();
    const usp = new URLSearchParams(location.search);
    // usp.get('page')

    console.log(location);

    const getPageData = async (event, gotoPage) => {
        if (event) {
            event.preventDefault();
        }
        console.log({ gotoPage });

        const r = await fetch(`${AB_GET_LIST}?page=${gotoPage}`);
        const obj = await r.json();
        console.log(obj);
        setData(obj);
    };

    useEffect(() => {
        getPageData(null, +usp.get('page') || 1);
    }, [location]);

    return (
        <div>
            {data && data.totalPages ? (
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#/">
                                Previous
                            </a>
                        </li>
                        {Array(11)
                            .fill(1)
                            .map((v, i) =>
                                data.page + i - 5 >= 1 &&
                                data.page + i - 5 <= data.totalPages ? (
                                    <li
                                        className={[
                                            "page-item",
                                            data.page === data.page + i - 5
                                                ? "active"
                                                : null,
                                        ].join(" ")}
                                        key={"pagi" + (+data.page + i - 5)}
                                    >
                                        <Link
                                            className="page-link"
                                            to={`?page=${data.page + i - 5}`}
                                        >
                                            {data.page + i - 5}
                                        </Link>
                                    </li>
                                ) : null
                            )}

                        <li className="page-item">
                            <a className="page-link" href="#/">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
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
    );
}
