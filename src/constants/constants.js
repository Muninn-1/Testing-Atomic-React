import { HEX_GREEN_XPLOSION, HEX_PINKISH_RED, HEX_WHITE, HEX_SKY_BLUE, HEX_PALE_ORANGE } from 'constants/styles/colors/hexa/colors';
// import utils from 'utils';

export const EMPTY_CONTENT_CELL = '--';


/* Status constants - START */
export const PENDING = 'pending';
export const IN_PROGRESS = 'in_progress';
export const REFUSED = 'refused';
export const CANCELLED = 'cancelled';
export const VALIDATED = 'validated';

export const STATUS = {
    [IN_PROGRESS]: IN_PROGRESS,
    [VALIDATED]: VALIDATED,
    [REFUSED]: REFUSED,
    [CANCELLED]: CANCELLED,
    [PENDING]: PENDING
}

export const STATUS_COLORS = {
    [IN_PROGRESS]: HEX_SKY_BLUE,
    [PENDING]: HEX_WHITE,
    [REFUSED]: HEX_PINKISH_RED,
    [CANCELLED]: HEX_PALE_ORANGE,
    [VALIDATED]: HEX_GREEN_XPLOSION,
}

/* Status constants - END */
/* Date Formats - START */
export const ISOWEEK = 'isoWeek';
export const DD_MM_YEAR = 'L';
export const DD_MMMM_YYYY = 'LL';
export const TIME_FORMAT = 'LT';
export const SECONDS_TIME_FORMAT = 'LTS';


export const D_H_FORMAT = `${DD_MM_YEAR} - ${TIME_FORMAT}`;
export const D_H_COMMA_FORMAT = `${DD_MM_YEAR}, ${TIME_FORMAT}`;



export const DEFAULT_FORMAT = D_H_FORMAT;
/* Date Formats - END */



