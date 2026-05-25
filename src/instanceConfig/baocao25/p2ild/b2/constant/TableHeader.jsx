
export function ReportHeader({ reportCode, reportName, totalCol, orgReportName, dhis2Period, customData }) {
    let period = dhis2Period.split(' ');
    period.splice(period.length - 2, 1); period = period.join(' ')
    return <>
        <table style={{ border: 0 }} className='mb-5'>
            <tr>
                <td
                    colSpan={totalCol || 10}
                    data-a-h="center" data-a-v="center" data-f-bold="true" style={{ width: "100vw", fontSize: "16px", border: 0, fontWeight: 800, textAlign: "center" }}>
                    <p>{reportName}</p>
                </td>
            </tr>
            <tr>
                <td
                    colSpan={totalCol || 10}
                    data-a-h="center" data-a-v="center" style={{ width: "100vw", fontSize: "16px", border: 0, textAlign: "center" }}>
                    <p>Kỳ báo cáo: {period}</p>
                </td>
            </tr>

        </table>
    </>
}

export function HeaderUILayoutTable2({ listColumnConfig }) {
    const excelConfig = {
        "data-a-h": "center",
        "data-a-v": "middle",
        "data-f-bold": "true",
        "data-a-wrap": "true",
        "data-b-a-s": 'thin',
    }
    return <>
        <thead>
            <tr>
                <th
                    {...excelConfig}
                    rowSpan={4}
                    className="sticky-col-0"
                    style={{
                        width: '30px'
                    }}
                >TT</th>
                <th {...excelConfig}
                    rowSpan={4}
                    style={{
                        width: '100px !important'
                    }}
                    className="sticky-col-1"
                >Tên cơ sở</th>
                <th {...excelConfig}
                    colSpan={7}>Tổng số chi
                </th>
                <th {...excelConfig}
                    rowSpan={4} style={{ width: '120px' }}
                >Chi vốn đầu tư XDCB
                </th>
                <th {...excelConfig}
                    rowSpan={4}
                >Chi phí Thuế TNDN
                </th>

                <th {...excelConfig}
                    colSpan={7}>Chênh lệch thu-chi
                </th>
            </tr>
            <tr>
                <th {...excelConfig} rowSpan={3}>
                    Tổng số
                </th>
                <th {...excelConfig} style={{ width: '150px' }} rowSpan={3}>
                    Chi tiền lương, tiền công và các khoản chi khác cho nhân viên
                </th>
                <th {...excelConfig} colSpan={3}>
                    Chi vật tư, công cụ và dịch vụ đã sử dụng
                </th>
                <th {...excelConfig} rowSpan={3} style={{ width: '120px' }}>
                    Chi hao mòn TSCĐ, chi khấu hao TSCĐ
                </th>
                <th {...excelConfig} rowSpan={3}>
                    Chi hoạt động khác
                </th>
                <th {...excelConfig} rowSpan={3}>
                    Tổng số
                </th>
                <th {...excelConfig} rowSpan={3}>
                    Trích lập Quỹ PTHĐSN
                </th>
                <th {...excelConfig} rowSpan={3} style={{ width: '120px' }}>
                    Trích lập Quỹ Khen thưởng, Phúc lợi
                </th>
                <th {...excelConfig} colSpan={2} style={{ width: '120px' }}>
                    Trích lập Quỹ ổn định thu nhập (bao gồm chi thu nhập tăng thêm)
                </th>

                <th {...excelConfig} rowSpan={3} style={{ width: '120px' }}>
                    Trích lập Quỹ khác
                </th>
                <th {...excelConfig} rowSpan={3} style={{ width: '120px' }}>
                    Kinh phí cải cách tiền lương
                </th>
            </tr>
            <tr>
                <th {...excelConfig} rowSpan={2} >
                    Tổng số
                </th>

                <th {...excelConfig} colSpan={2} >
                    Trong đó
                </th>
                <th {...excelConfig} rowSpan={2} >
                    Tổng số
                </th>
                <th {...excelConfig} style={{ width: '170px' }} rowSpan={2} >
                    Tỷ lệ so với Tiền lương ngạch bậc (hệ số thu nhập tăng thêm)
                </th>
            </tr>
            <tr>
                <th {...excelConfig}>
                    Chi thuốc của Nhà thuốc Bệnh viện
                </th>
                <th {...excelConfig} style={{ width: '130px' }}>
                    Chi thuốc, vật tư, hóa chất, máu..  phục vụ KC,CB
                </th>
            </tr>
            <tr>
                <th {...excelConfig}
                    className="sticky-col-0 col-no"
                >1</th>
                <th {...excelConfig}
                    className="sticky-col-1 col-no"
                >2</th>
                <th {...excelConfig} className={"col-no"}>3</th>
                <th {...excelConfig} className={"col-no"}>4</th>
                <th {...excelConfig} className={"col-no"}>5</th>
                <th {...excelConfig} className={"col-no"}
                    style={{
                        width: '200px'
                    }}
                >6</th>
                <th {...excelConfig} className={"col-no"}>6</th>
                <th {...excelConfig} className={"col-no"}>7</th>
                <th {...excelConfig} className={"col-no"}>8</th>
                <th {...excelConfig} className={"col-no"}>9</th>
                <th {...excelConfig} className={"col-no"}>10</th>
                <th {...excelConfig} className={"col-no"}>11</th>
                <th {...excelConfig} className={"col-no"}>12</th>
                <th {...excelConfig} className={"col-no"}>13</th>
                <th {...excelConfig} className={"col-no"}>14</th>
                <th {...excelConfig} className={"col-no"}>15</th>
                <th {...excelConfig} className={"col-no"}>16</th>
                <th {...excelConfig} className={"col-no"}>17</th>
            </tr>
        </thead>
    </>
}

export function HeaderUILayoutTable1({ listColumnConfig }) {
    const excelConfig = {
        "data-a-h": "center",
        "data-a-v": "middle",
        "data-f-bold": "true",
        "data-a-wrap": "true",
        "data-b-a-s": 'thin',
    }
    return <>
        <thead>
            <tr>
                <th
                    {...excelConfig}
                    rowSpan={3}
                    className="sticky-col-0"
                    style={{
                        width: '30px'
                    }}
                >TT</th>
                <th {...excelConfig}
                    rowSpan={3}
                    style={{
                        width: '100px !important'
                    }}
                    className="sticky-col-1"
                >Tên cơ sở</th>
                <th {...excelConfig}
                    colSpan={4}>Phân loại tự chủ
                </th>
                <th {...excelConfig}
                    colSpan={13}>Tổng nguồn thu
                </th>

            </tr>
            <tr>
                <th {...excelConfig} style={{ width: '60px' }} rowSpan={2}>{`Nhóm 1`}</th>
                <th {...excelConfig} style={{ width: '60px' }} rowSpan={2}>{`Nhóm 2`}</th>
                <th {...excelConfig} style={{ width: '60px' }} rowSpan={2}>{`Nhóm 3`}</th>
                <th {...excelConfig} style={{ width: '60px' }} rowSpan={2}>{`Nhóm 4`}</th>
                <th {...excelConfig} rowSpan={2}>{`Tổng số`}</th>
                <th {...excelConfig} colSpan={4}>{`Nguồn NSNN cấp chi thường xuyên`}</th>
                <th {...excelConfig} style={{ width: '120px' }} rowSpan={2}>{`NSNN cấp chi đầu tư và XDCB`}</th>
                <th {...excelConfig} rowSpan={2} style={{ width: '70px' }}>{`Kinh phí viện trợ`}</th>
                <th {...excelConfig} colSpan={6}>{`Nguồn thu`}</th>
            </tr>
            <tr>
                <th {...excelConfig}>{`Tổng số`}</th>
                <th {...excelConfig} style={{ width: '120px' }}>{`NSNN cấp chi thường xuyên`}</th>
                <th {...excelConfig} style={{ width: '120px' }}>
                    {`NSNN cấp chi không thường xuyên (không có CTMT)`}</th>
                <th {...excelConfig} style={{ width: '120px' }}>{`NSNN cấp chi CTMT`}</th>

                <th {...excelConfig}>{`Tổng số`}</th>
                <th {...excelConfig}>{`Thu BHYT`}</th>
                <th {...excelConfig}>{`Thu viện phí trực tiếp`}</th>
                <th {...excelConfig} style={{ width: '70px' }}>{`Thu dịch vụ y tế dự phòng`}</th>
                <th {...excelConfig} style={{ width: '70px' }}>{`Thu KCB theo yêu cầu`}</th>
                <th {...excelConfig} style={{ width: '70px' }}>{`Các khoản thu sự nghiệp khác`}</th>


            </tr>
            <tr>
                <th {...excelConfig}
                    className="sticky-col-0 col-no"
                >1</th>
                <th {...excelConfig}
                    className="sticky-col-1 col-no"
                >2</th>
                <th {...excelConfig} className={"col-no"}>3</th>
                <th {...excelConfig} className={"col-no"}>4</th>
                <th {...excelConfig} className={"col-no"}>5</th>
                <th {...excelConfig} className={"col-no"}
                    style={{
                        width: '100px'
                    }}
                >6</th>
                <th {...excelConfig} className={"col-no"}>7</th>
                <th {...excelConfig} className={"col-no"}>8</th>
                <th {...excelConfig} className={"col-no"}>9</th>
                <th {...excelConfig} className={"col-no"}>10</th>
                <th {...excelConfig} className={"col-no"}>11</th>
                <th {...excelConfig} className={"col-no"}>12</th>
                <th {...excelConfig} className={"col-no"}>13</th>
                <th {...excelConfig} className={"col-no"}>14</th>
                <th {...excelConfig} className={"col-no"}>15</th>
                <th {...excelConfig} className={"col-no"}>16</th>
                <th {...excelConfig} className={"col-no"}>17</th>
                <th {...excelConfig} className={"col-no"}>18</th>
                <th {...excelConfig} className={"col-no"}>19</th>
            </tr>
        </thead>
    </>
}