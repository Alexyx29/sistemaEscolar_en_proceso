import moment from "moment";

/**
 * Da el formato de moneda
 * @param {string} locale ISO del país ejemplo es-MX
 * @param {string} currency ISO de la moneda ejemplo MXN
 * @param {float} amount cantidad a dar formato
 * @returns 
 */
const money = (locale, currency, amount) => {
    if(!amount){
        return '-'
    }
    let format = Intl.NumberFormat(locale, { style: 'currency', currency: currency, minimumFractionDigits: 2});
    return format.format(amount);
}
/**
 * Da el formato de moneda si es null o 0 lo cambia por -
 * @param {string} locale ISO del país ejemplo es-MX
 * @param {string} currency ISO de la moneda ejemplo MXN
 * @param {float} amount cantidad a dar formato
 * @returns 
 */
const moneyNull = (locale, currency, amount) => {
    if(amount >= 1){
        let format = Intl.NumberFormat(locale, { style: 'currency', currency: currency, minimumFractionDigits: 2});
        let tmp =  format.format(amount);
        // return (tmp.includes(currency)) ? tmp : tmp +'  '+ currency;
        return tmp;
    }else{
        return "-";
    }
}

const formatTable = (headers, items, nameCols) => {
    let results = [];
    nameCols.map((col, key) => {
        let header = headers.find(e => e.col == col.name);
        if(header !== undefined){
            results.push([header.name]);
            let actualCol = results.length - 1;
            let nameCol = col.name;
            items.map((item) => {
                if(item[nameCol]){
                    results[actualCol].push(item[nameCol]);
                } else {
                    if(nameCol === 'check'){
                        results[actualCol].push(item['id']);
                    } else {
                        results[actualCol].push('');
                    }
                }
            });
        }
    });
    return results;
}

const formatTableSelect = (headers, items, nameCols) => {
    let tabla = [];
    let position = 0;
    nameCols.map((col, key) => {
        let header = headers.find(e => e.col == col.name);
        if(position == 0){
            let i = {id: false, width: false, position: false, columnas: [], img: false, align: false, name: 'id', select: false, input: false, status: false};
            items.map((item) => {
                i.columnas.push(item.id);
            });

            tabla.push(i);
        }
        position ++;
        if(header !== undefined){
            let i = {id: col.id, width: col.width, position: col.position, columnas: [header.name], img: col.img, align: col.align, name: col.name, select: col.select, input: col.input, status: col.status};
            let nameCol = col.name;
            items.map((item) => {
                if(item[nameCol]){
                    i.columnas.push(item[nameCol]);
                } else {
                    if(nameCol === 'check'){
                        i.columnas.push(item.id);
                    } else {
                        i.columnas.push('');
                    }
                }
            });
            tabla.push(i);
        }
    });

    return tabla;
}

const formatTableDrag = (headers, items, nameCols) => {
    let tabla = [];
    nameCols.map((col, key) => {
        let header = headers.find(e => e.col == col.name);
        if(header !== undefined){
            let i = {id: col.id, width: col.width, position: key+1, columnas: [header.name], align: col.align, name: col.name, status: col.status, idColumn: col.id_ref};
            let nameCol = col.name;
            items.map((item) => {
                if(item[nameCol]){
                    i.columnas.push(item[nameCol]);
                } else {
                    if(nameCol === 'check'){
                        i.columnas.push(item.id);
                    } else {
                        i.columnas.push('');
                    }
                }
            });
            tabla.push(i);
        }
    });
    return tabla;
}

const getEquivalence = (amount, equivalenceFrom, equivalenceTo) => {
    let a = amount * equivalenceFrom;
    if(equivalenceTo){
        a /= equivalenceTo;
    }
    return a;
}

const formateDateFunc = (dateValue, dateFormat) => {
    // Fecha en formato YYYY-MM-DD
    if(dateValue){
        const t = dateValue.split(' ');
        dateValue = t[0]
        let items = [];
        let finalDate = '';
        let sep = '';
        if(dateFormat.includes('/')){
            items = dateFormat.split('/')
            sep = '/'
        } else if(dateFormat.includes('-')){
            items = dateFormat.split('-')
            sep = '-'
        }

        let itemsDate = dateValue.split('-');
        let s = '';
        items.map(i => {
            switch(i){
                case 'DD':finalDate += s + itemsDate[2];s=sep;break;
                case 'MM':finalDate += s + itemsDate[1];s=sep;break;
                case 'AA':
                    finalDate += s + itemsDate[0].slice(-2);s=sep;
                    break;
                case 'AAAA':finalDate += s + itemsDate[0];s=sep;break;
            }
        });
        return finalDate;
    } else {
        return '';
    }
}

const formateHourFunc = (hourValue, hourFormat) => {
    // Hora en formato HH:mm:ss
    // 0 => 24
    // 1 => 12
    if(parseInt(hourFormat) == 1){
        let items = hourValue.split(':');
        let hour = parseInt(items[0]);
        if(hour > 12 && hour < 24){
            let t = hour-12
            return (hour-12).toString().padStart(2, '0') + `:${items[1]}` + 'pm';
        } else if(hour < 12) {
            return hour.toString().padStart(2, '0') + `:${items[1]}` + 'am';
        } else {
            return (hour == 12) ? hour.toString().padStart(2, '0') + `:${items[1]}` + 'pm' : (hour-24).toString().padStart(2, '0') + `:${items[1]}` + 'am'
        }
    } else {
        return hourValue.substring(0, 5)
    }
}

const formateDateHourFunc = (dateValue, dateFormat, hourFormat) => {
    if(dateValue){
        let tmp = dateValue.split(' ');
        let dia = formateDateFunc(tmp[0], dateFormat);
        let hora = formateHourFunc(tmp[1], hourFormat);
        return dia +' '+ hora
    } else {
        return '';
    }
}

const formatPhoneAgenda = (phone, formatPhone = '', lada = null, extension = null) => {
    extension = extension || '';
    lada = lada || '';
    let fp = `${lada}`;
    phone = phone.replaceAll(' ', '');
    let p1, p2, p3, p4;
    // console.log(formatPhone)
    switch(formatPhone){
        case 1: // 0000 0000
            p1 = phone.substring(0, 4)
            p2 = phone.substring(4);
            fp += ' ' + p1 + ' '+ p2;
        break;
        case 2: // 000 000 0000
            p1 = phone.substring(0, 3);
            p2 = phone.substring(3, 6);
            p3 = phone.substring(6)
            fp += ' ' + p1 + ' ' + p2 + ' ' + p3;// + ' '+ phone;
        break;
        case 3: // 000 0000
            fp += ' ' + phone.substring(0, 3) + ' '+ phone.substring(3);
        break;
        default:
            fp += ' ' + phone.substring(0, 2) + ' '+ phone.substring(2, 6) + ' '+ phone.substring(6);
        break;
    }
    return `${fp} ${extension}`;
}

const setDateForPicker = (rdate) => {
    let d = rdate.getDate();
    d < 10 && (d = "0" + d);
    let m = rdate.getMonth() + 1;
    m < 10 && (m = "0" + m);
    let y = rdate.getFullYear();
    rdate = y + "-" + m + "-" + d;
  
    return rdate;
};

const setTimeForPicker = (rdate) => {
    let h = rdate.getHours();
    h < 10 && (h = "0" + h);
    let m = rdate.getMinutes() + 1;
    m < 10 && (m = "0" + m);
    /* let s = rdate.getSeconds();
    s < 10 && (s = "0" + s); */
    // rdate = h + ":" + m + ":" + s;
    rdate = h + ":" + m;
  
    return rdate;
};

const jsonToArray = (json) => {
    let c = [];
    for(var i in json){
        c.push(json[i])
    }
    return c;
}

const verifyRecess = (fecha, recessStart, hora, recessEnd) => {
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    
    const [ horas1, minutos1, segundos1 ] = recessStart.split(':')
    const [ horas2, minutos2 ] = hora.split(':')
    const [ horas3, minutos3, segundos3 ] = recessEnd.split(':')
    const dia1 = new Date(anio, mes, dia, horas1, minutos1, segundos1);
    const dia2 = new Date(anio, mes, dia, horas2, minutos2, 0);
    const dia3 = new Date(anio, mes, dia, horas3, minutos3, segundos3);
    if(dia1.getTime() < dia2.getTime() && dia2.getTime() < dia3.getTime()){
        return false
    } 
    return true;
}

const restHours = dateS => {
    const gmtReg = /GMT([\-\+]?\d{4})/;
    const tz = gmtReg.exec(dateS)[1];
    const hour = tz/100;
    const min = tz%100;
    dateS.setHours(dateS.getHours() - hour)
    dateS.setMinutes(dateS.getMinutes() - min)
    const dateInfo = moment(dateS);
    return dateInfo;
}

export { money, moneyNull, formatTable, formatTableDrag, formatTableSelect, getEquivalence, formateDateFunc, formateHourFunc, formateDateHourFunc, formatPhoneAgenda, setDateForPicker, setTimeForPicker, jsonToArray, verifyRecess, restHours }
