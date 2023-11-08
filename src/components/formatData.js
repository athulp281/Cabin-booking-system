import PropTypes from "prop-types";
formatDataForDataTable.propTypes = {
    data: PropTypes.array,
};
export function formatDataForDataTable(data) {
    let serialNumber = 1;
    return data.map((item) => ({
        serialNumber: serialNumber++,
        ...item,
    }));
}
