import moment from "moment";

const useTime = () => {

    // Given two ranges this function returns a boolean based on the condition that range1 is within range2
    const isRangeWithinRange = ({
        range1 /* {from: (Date), to: (Date)} */,
        range2,
        compareFromDayStart = false,
        compareToDayEnd = false
    }) => {

        const range1FromIsNatDate = moment.isDate(range1?.from);
        const range1ToIsNatDate = moment.isDate(range1?.to);
        const range2FromIsNatDate = moment.isDate(range2?.from);
        const range2ToIsNatDate = moment.isDate(range2?.to);

        try {
            if (
                !range1FromIsNatDate ||
                !range1ToIsNatDate ||
                !range2FromIsNatDate ||
                !range2ToIsNatDate
            ) {
                throw new Error("At useTime.isRangeWithinRange. All params must be native dates", {
                    range_1: {
                        from_is_nat_date: range1FromIsNatDate,
                        to_is_nat_date: range1ToIsNatDate
                    },
                    range_2: {
                        from_is_nat_date: range2FromIsNatDate,
                        to_is_nat_date: range2ToIsNatDate
                    }
                });
            }
        } catch (e) {
            console.warn(e);
        }

        const range1FromCompare = (compareFromDayStart) ?
            moment(range1.from).startOf("day") :
            moment(range1.from);

        const range1ToCompare = (compareToDayEnd) ?
            moment(range1.to).endOf("day") :
            moment(range1.to);

        const range2FromCompare = (compareFromDayStart) ?
            moment(range2.from).startOf("day") :
            moment(range2.from);

        const range2ToCompare = (compareToDayEnd) ?
            moment(range2.to).endOf("day") :
            moment(range2.to);

        if (
            moment(range1.from).isBetween(range2FromCompare, range2ToCompare) ||
            moment(range1.to).isBetween(range2FromCompare, range2ToCompare) ||
            moment(range2.from).isBetween(range1FromCompare, range1ToCompare) ||
            moment(range2.to).isBetween(range1FromCompare, range2ToCompare)
        ) {
            return true;
        }
    }

    // Gets the last week of the current month as a moment instance ------------------------------------------------
    const getLastWeekOfMonth = (momentInstance) => {

        const lastWeek = moment(momentInstance).endOf("month") - moment(momentInstance).startOf("month");

        return moment(Date.now()).week(lastWeek);

    }

    return ({
        isRangeWithinRange,
        getLastWeekOfMonth
    })
}

export default useTime;