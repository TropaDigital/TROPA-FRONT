import React from "react";
import Animate from "../Animation/Animate";

export const Logo: React.FC = ({ width = 265, height = 42 }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1600 253"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_22)">
        <path
          d="M242.97 166.06L271.38 155.17V81.69L242.97 70.8C224.76 30.23 184.04 1.96 136.69 1.96C89.34 1.96 48.62 30.23 30.41 70.8L2 81.69V155.16L30.41 166.05C37.08 180.91 46.78 194.11 58.71 204.89V212.73H37.56L23.59 254.52H249.79L235.82 212.73H214V205.5C226.24 194.62 236.17 181.19 242.97 166.06ZM105.65 37.52H167.73V53.13H105.65V37.52V37.52ZM206.87 158.02L185.45 179.44H87.43L65.84 157.85V87.9L87.4 66.34H185.78L206.86 87.42V158.02H206.87Z"
          fill="#CC6237"
          className="animate__animated animate__fadeIn astronaut"
        />
        <path
          d="M798.26 80.41C750.68 80.41 711.96 119.12 711.96 166.71C711.96 214.29 750.67 253.01 798.26 253.01C845.85 253.01 884.56 214.3 884.56 166.71C884.55 119.12 845.84 80.41 798.26 80.41ZM811.83 166.28C812.06 173.77 806.16 180.05 798.67 180.28C793.77 180.46 790.48 178.04 788.95 176.6C787.42 175.16 784.83 172.02 784.68 167.12C784.45 159.63 790.35 153.35 797.84 153.12C797.98 153.12 798.12 153.11 798.27 153.11C805.56 153.12 811.61 158.94 811.83 166.28Z"
          fill="#D8BCA9"
          className="animate__animated animate__bounce tropa"
        />
        <path
          d="M370.83 147.39H397.89V252.02H463.88V147.39H490.94V81.39H370.83V147.39Z"
          fill="#D8BCA9"
          className="tropa"
        />
        <path
          d="M902.25 82.28V252.01H966.95V229.37H1034.8L1065.45 198.73V113.99L1033.73 82.28H902.25V82.28ZM1000.74 164.67H966.95V146.99H1000.74V164.67Z"
          fill="#D8BCA9"
          className="tropa"
        />
        <path
          d="M511.31 252H576.01V146.13H625.53L592.59 179.07V252H693.58V187.3H675.87L694.26 168.9V81.42H511.31V252Z"
          fill="#D8BCA9"
          className="tropa"
        />
        <path
          d="M1085.14 82.28V252.02H1149.85V146.98H1167.39V252.02H1232.09V82.28H1085.14Z"
          fill="#D8BCA9"
          className="tropa"
        />
        <path
          d="M1302.3 71.29H1302.38V71.36H1302.3V71.29ZM1302.3 116.35H1319.58C1324.74 116.3 1328.56 117.43 1331.04 119.73C1333.52 122.03 1335.04 124.64 1335.62 127.54C1336.2 130.44 1336.48 133.77 1336.48 137.53V192.74C1336.48 196.5 1336.19 199.81 1335.62 202.69C1335.04 205.57 1333.52 208.16 1331.04 210.46C1328.56 212.77 1324.77 213.92 1319.66 213.92H1302.31V116.35H1302.3ZM1321.08 197.81C1321.48 197.38 1321.74 196.71 1321.87 195.78C1321.99 194.85 1322.06 193.46 1322.06 191.61V138.88C1322.06 137.03 1321.98 135.6 1321.83 134.6C1321.68 133.6 1321.4 132.89 1321 132.46C1320.6 132.03 1319.97 131.82 1319.12 131.82H1316.72V198.44H1319.2C1320.05 198.45 1320.68 198.23 1321.08 197.81Z"
          fill="#CC6237"
          className="animate__animated animate__fadeInRight digital"
          style={{ animationDelay: ".2s" }}
        />
        <path
          d="M1353.75 116.35H1368.7V213.92H1353.75V116.35Z"
          fill="#CC6237"
          className="animate__animated animate__fadeInRight digital"
          style={{ animationDelay: ".4s" }}
        />
        <path
          d="M1389.76 209.22C1387.23 205.49 1385.97 200.22 1385.97 193.41V136.48C1385.97 132.72 1386.26 129.41 1386.83 126.53C1387.41 123.65 1388.93 121.06 1391.41 118.76C1393.89 116.46 1397.68 115.31 1402.79 115.31H1404.14C1410.55 115.31 1414.93 117 1417.28 120.38C1419.63 123.76 1420.86 128.08 1420.96 133.34V151.82H1406.54V133.94C1406.54 132.89 1406.25 132.1 1405.68 131.57C1405.1 131.04 1404.44 130.78 1403.69 130.78H1403.24C1402.44 130.78 1401.84 130.99 1401.44 131.42C1401.04 131.85 1400.77 132.53 1400.65 133.49C1400.52 134.44 1400.46 135.84 1400.46 137.7V191.48C1400.46 194.38 1400.63 196.41 1400.98 197.56C1401.33 198.71 1402.06 199.32 1403.16 199.36H1403.61C1404.66 199.31 1405.41 199 1405.86 198.42C1406.31 197.84 1406.54 196.98 1406.54 195.83V172.02H1403.01V159.47H1421.04V213.85H1411.35V206.56H1410.67C1410.62 207.51 1410.52 208.34 1410.37 209.04C1410.07 210.94 1409.09 212.38 1407.44 213.36C1405.79 214.34 1403.81 214.82 1401.51 214.82H1400.53C1395.89 214.82 1392.29 212.95 1389.76 209.22Z"
          fill="#CC6237"
          className="animate__animated animate__fadeInRight digital"
          style={{ animationDelay: ".6s" }}
        />
        <path
          d="M1439.07 116.35H1454.02V213.92H1439.07V116.35Z"
          fill="#CC6237"
          className="animate__animated animate__fadeInRight digital"
          style={{ animationDelay: ".8s" }}
        />
        <path
          d="M1480.46 131.82H1471.3V116.35H1504.2V131.82H1495.04V213.91H1480.47V131.82H1480.46Z"
          fill="#CC6237"
          className="animate__animated animate__fadeInRight digital"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M1524.32 116.35H1544.22L1554.96 213.92H1540.24L1538.21 193.79H1530.32L1528.14 213.92H1513.57L1524.32 116.35ZM1532.81 179.67H1535.74C1536.09 179.67 1536.39 179.7 1536.64 179.75L1536.87 179.83L1537.09 179.68L1536.94 179.23C1536.94 178.88 1536.91 178.55 1536.86 178.25L1534.76 146.25C1534.71 145.2 1534.66 143.97 1534.61 142.57C1534.56 141.17 1534.53 139.99 1534.53 139.04H1533.93C1533.93 139.99 1533.9 141.17 1533.85 142.57C1533.8 143.97 1533.75 145.2 1533.7 146.25L1531.75 178.25L1531.67 178.7L1531.6 179.23L1531.45 179.68L1531.67 179.83L1531.97 179.75C1532.23 179.69 1532.51 179.67 1532.81 179.67Z"
          fill="#CC6237"
          className="animate__animated animate__fadeInRight digital"
          style={{ animationDelay: "1.2s" }}
        />
        <path
          d="M1570.73 116.35H1585.98V198.45H1598V213.92H1570.73V116.35Z"
          fill="#CC6237"
          className="animate__animated animate__fadeInRight digital"
          style={{ animationDelay: "1.4s" }}
        />
        <path
          className="animate__animated animate__fadeInRight digital"
          d="M1598 81.81H1302.3V96.75H1598V81.81Z"
          fill="#CC6237"
        />
        <path
          className="animate__animated animate__fadeInRight digital"
          d="M1598 236.68H1302.3V251.62H1598V236.68Z"
          fill="#CC6237"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_22">
          <rect width="1600" height="253" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconSearch: React.FC = ({ width = 25, height = 25 }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426zM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const IconCube: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="157"
      height="181"
      viewBox="0 0 157 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78.52 180.05L78.02 179.76L0.980011 135.28V45.75L1.48001 45.46L78.52 0.989998L79.02 1.28L156.06 45.76V135.29L155.56 135.58L78.52 180.05ZM2.98001 134.13L78.52 177.74L154.06 134.13V46.91L78.52 3.3L2.98001 46.91V134.13Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M2.73374 45.5819L1.73694 47.3157L78.0068 91.165L79.0036 89.4312L2.73374 45.5819Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M154.323 45.5956L78.0093 89.4196L79.0053 91.154L155.319 47.33L154.323 45.5956Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M79.52 90.29H77.52V178.89H79.52V90.29Z"
        className={className}
        fill="#CC6237"
      />
    </svg>
  );
};

export const IconPhone: React.FC = ({
  width = 60,
  height = 107,
  className,
}: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 60.983 107.017"
    >
      <g
        id="Objeto_Inteligente_de_Vetor"
        data-name="Objeto Inteligente de Vetor"
        transform="translate(-198.913 -879.841)"
      >
        <rect
          id="Retângulo_2"
          data-name="Retângulo 2"
          width="57.802"
          height="103.836"
          rx="10.604"
          transform="translate(200.504 881.432)"
          fill="none"
          stroke="#cc6237"
          strokeMiterlimit="10"
          strokeWidth="3.181"
          className={className}
        />
        <ellipse
          id="Elipse_1"
          data-name="Elipse 1"
          cx="5.054"
          cy="5"
          rx="5.054"
          ry="5"
          transform="translate(224.351 961.242)"
          fill="none"
          stroke="#cc6237"
          strokeMiterlimit="10"
          strokeWidth="3.181"
          className={className}
        />
        <line
          id="Linha_4"
          data-name="Linha 4"
          x2="23.216"
          transform="translate(217.797 897.136)"
          fill="none"
          stroke="#cc6237"
          strokeMiterlimit="10"
          strokeWidth="3.198"
          className={className}
        />
      </g>
    </svg>
  );
};

export const IconCode: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="183"
      height="123"
      viewBox="0 0 183 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.41 104.45L0.809998 57.84L47.41 11.24L48.83 12.66L3.64 57.84L48.83 103.03L47.41 104.45Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M135.62 104.45L134.21 103.03L179.4 57.84L134.21 12.66L135.62 11.24L182.23 57.84L135.62 104.45Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M107.954 0.367319L72.6791 122.111L74.6001 122.667L109.875 0.923919L107.954 0.367319Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const IconDesktop: React.FC = ({ className }: any) => {
  return (
    <svg
      width="108"
      height="77"
      viewBox="0 0 108 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M101.644 1.56097H6.343C3.70252 1.56097 1.562 3.7015 1.562 6.34197V58.573C1.562 61.2134 3.70252 63.354 6.343 63.354H101.644C104.284 63.354 106.425 61.2134 106.425 58.573V6.34197C106.425 3.7015 104.284 1.56097 101.644 1.56097Z"
        stroke="#CC6237"
        strokeWidth="3.123"
        strokeMiterlimit="10"
        className={className}
      />
      <path
        d="M1.562 51.579H106.425"
        stroke="#CC6237"
        strokeWidth="3.42"
        strokeMiterlimit="10"
        className={className}
      />
      <path
        d="M36.28 74.709V63.355"
        stroke="#CC6237"
        strokeWidth="2.852"
        strokeMiterlimit="10"
        className={className}
      />
      <path
        d="M71.707 63.355V74.709"
        stroke="#CC6237"
        strokeWidth="2.852"
        strokeMiterlimit="10"
        className={className}
      />
      <path
        d="M25.602 74.709H82.386"
        stroke="#CC6237"
        strokeWidth="3.42"
        strokeMiterlimit="10"
        className={className}
      />
    </svg>
  );
};

export const IconEntedimento: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="40"
      height="35"
      viewBox="0 0 40 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.375 0H25.625C28.04 0 30 1.96 30 4.375V18.125C30 19.2853 29.5391 20.3981 28.7186 21.2186C27.8981 22.0391 26.7853 22.5 25.625 22.5H17.6525L11.2175 28.9325C10.7076 29.4404 10.0588 29.7861 9.3528 29.9258C8.64679 30.0656 7.91522 29.9932 7.25028 29.7178C6.58535 29.4424 6.01682 28.9764 5.61636 28.3784C5.21591 27.7804 5.00144 27.0772 5 26.3575V22.5H4.375C3.21468 22.5 2.10188 22.0391 1.28141 21.2186C0.460936 20.3981 0 19.2853 0 18.125L0 4.375C0 1.96 1.96 0 4.375 0ZM3.75 4.375V18.125C3.75 18.47 4.03 18.75 4.375 18.75H6.875C7.37228 18.75 7.84919 18.9475 8.20083 19.2992C8.55246 19.6508 8.75 20.1277 8.75 20.625V26.1L15.55 19.3C15.7239 19.1257 15.9304 18.9874 16.1577 18.8931C16.3851 18.7987 16.6288 18.7501 16.875 18.75H25.625C25.7908 18.75 25.9497 18.6842 26.0669 18.5669C26.1842 18.4497 26.25 18.2908 26.25 18.125V4.375C26.25 4.20924 26.1842 4.05027 26.0669 3.93306C25.9497 3.81585 25.7908 3.75 25.625 3.75H4.375C4.20924 3.75 4.05027 3.81585 3.93306 3.93306C3.81585 4.05027 3.75 4.20924 3.75 4.375ZM36.25 9.375C36.25 9.20924 36.1842 9.05027 36.0669 8.93306C35.9497 8.81585 35.7908 8.75 35.625 8.75H34.375C33.8777 8.75 33.4008 8.55246 33.0492 8.20083C32.6975 7.84919 32.5 7.37228 32.5 6.875C32.5 6.37772 32.6975 5.90081 33.0492 5.54917C33.4008 5.19754 33.8777 5 34.375 5H35.625C38.04 5 40 6.96 40 9.375V23.125C40 24.2853 39.5391 25.3981 38.7186 26.2186C37.8981 27.0391 36.7853 27.5 35.625 27.5H35V31.3575C34.9986 32.0772 34.7841 32.7804 34.3836 33.3784C33.9832 33.9764 33.4146 34.4424 32.7497 34.7178C32.0848 34.9932 31.3532 35.0656 30.6472 34.9258C29.9412 34.7861 29.2924 34.4404 28.7825 33.9325L23.05 28.2C22.8032 27.9708 22.6228 27.6793 22.5277 27.3562C22.4327 27.0331 22.4266 26.6903 22.51 26.364C22.5934 26.0377 22.7633 25.7399 23.0018 25.5021C23.2403 25.2642 23.5385 25.0951 23.865 25.0125C24.1909 24.929 24.5334 24.9348 24.8563 25.0294C25.1792 25.124 25.4706 25.3038 25.7 25.55L31.25 31.1V25.625C31.25 25.1277 31.4475 24.6508 31.7992 24.2992C32.1508 23.9475 32.6277 23.75 33.125 23.75H35.625C35.7908 23.75 35.9497 23.6842 36.0669 23.5669C36.1842 23.4497 36.25 23.2908 36.25 23.125V9.375Z"
        fill="#CEBAA8"
      />
    </svg>
  );
};

export const IconSolucaoProblema: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.701 15.7C25.8852 15.5284 26.0329 15.3214 26.1354 15.0914C26.2379 14.8614 26.293 14.6131 26.2974 14.3613C26.3019 14.1096 26.2556 13.8595 26.1613 13.626C26.067 13.3926 25.9266 13.1805 25.7486 13.0024C25.5705 12.8244 25.3584 12.684 25.125 12.5897C24.8915 12.4954 24.6414 12.4491 24.3897 12.4535C24.1379 12.458 23.8896 12.5131 23.6596 12.6156C23.4296 12.718 23.2226 12.8658 23.051 13.05L15.626 20.475L13.201 18.05C12.8455 17.7188 12.3754 17.5385 11.8897 17.5471C11.4039 17.5557 10.9404 17.7524 10.5969 18.096C10.2534 18.4395 10.0566 18.903 10.048 19.3887C10.0395 19.8745 10.2198 20.3446 10.551 20.7L14.301 24.45C14.6525 24.8011 15.1291 24.9984 15.626 24.9984C16.1228 24.9984 16.5994 24.8011 16.951 24.45L25.701 15.7Z"
        fill="#CEBAA8"
      />
      <path
        d="M18.7509 37.5C14.4936 37.5002 10.3629 36.0516 7.0383 33.3924C3.71364 30.7331 1.39295 27.0216 0.457873 22.8682C-0.477203 18.7149 0.0290161 14.3669 1.89328 10.5395C3.75754 6.71204 6.86884 3.63298 10.7155 1.80868C14.5622 -0.0156207 18.9151 -0.476529 23.0585 0.501753C27.2019 1.48004 30.8891 3.83926 33.5135 7.19143C36.138 10.5436 37.5435 14.6891 37.499 18.9462C37.4544 23.2033 35.9625 27.3185 33.2684 30.615L39.4509 36.8C39.6977 37.0292 39.8782 37.3207 39.9732 37.6438C40.0682 37.9669 40.0744 38.3097 39.9909 38.636C39.9075 38.9623 39.7376 39.2601 39.4991 39.498C39.2607 39.7358 38.9625 39.9049 38.6359 39.9875C38.31 40.0711 37.9676 40.0652 37.6447 39.9706C37.3217 39.8761 37.0303 39.6962 36.8009 39.45L30.6159 33.2675C27.2703 36.0096 23.0767 37.5055 18.7509 37.5ZM18.7509 3.75002C16.306 3.74991 13.898 4.34746 11.7368 5.49066C9.5755 6.63385 7.72646 8.28801 6.35061 10.3091C4.97476 12.3303 4.11382 14.6571 3.84275 17.087C3.57167 19.5169 3.89868 21.9762 4.79531 24.2508C5.69194 26.5255 7.13099 28.5465 8.98719 30.1378C10.8434 31.7292 13.0604 32.8427 15.4453 33.3814C17.8302 33.9201 20.3107 33.8677 22.6706 33.2286C25.0306 32.5896 27.1987 31.3834 28.9859 29.715C29.1566 29.4077 29.4105 29.1547 29.7184 28.985C31.7127 26.848 33.0393 24.175 33.5354 21.2944C34.0315 18.4138 33.6754 15.451 32.5109 12.77C31.3451 10.0898 29.4219 7.80833 26.9774 6.20594C24.533 4.60355 21.6738 3.74996 18.7509 3.75002Z"
        fill="#CEBAA8"
      />
    </svg>
  );
};

export const IconDesenvolvimento: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="39"
      height="26"
      viewBox="0 0 39 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5733 0.596133L38.1983 11.2211C38.5495 11.5727 38.7467 12.0493 38.7467 12.5461C38.7467 13.043 38.5495 13.5196 38.1983 13.8711L27.5733 24.4961C27.3442 24.7429 27.0527 24.9234 26.7295 25.0184C26.4064 25.1134 26.0636 25.1196 25.7373 25.0361C25.411 24.9527 25.1133 24.7828 24.8754 24.5443C24.6376 24.3059 24.4684 24.0077 24.3859 23.6811C24.3023 23.3552 24.3081 23.0128 24.4027 22.6899C24.4973 22.3669 24.6772 22.0755 24.9234 21.8461L34.2234 12.5461L24.9234 3.24613C24.6765 3.01695 24.4961 2.72545 24.4011 2.40232C24.306 2.0792 24.2999 1.73643 24.3834 1.41012C24.4668 1.08381 24.6367 0.786044 24.8751 0.548194C25.1136 0.310345 25.4118 0.141218 25.7383 0.0586331C26.0643 -0.0249085 26.4067 -0.0190808 26.7296 0.0755042C27.0525 0.170089 27.344 0.349936 27.5733 0.596133ZM11.1733 0.596133C11.529 0.265111 11.9991 0.0848525 12.4849 0.0932444C12.9707 0.101636 13.4343 0.298025 13.7784 0.641133C14.1215 0.985141 14.3178 1.44876 14.3262 1.93456C14.3346 2.42035 14.1544 2.89048 13.8234 3.24613L4.52335 12.5461L13.8234 21.8461C14.0702 22.0753 14.2506 22.3668 14.3456 22.6899C14.4407 23.0131 14.4468 23.3558 14.3634 23.6821C14.2799 24.0085 14.11 24.3062 13.8715 24.5441C13.6331 24.7819 13.3349 24.951 13.0084 25.0336C12.6824 25.1172 12.34 25.1113 12.0171 25.0168C11.6942 24.9222 11.4027 24.7423 11.1733 24.4961L0.54835 13.8711C0.197224 13.5196 0 13.043 0 12.5461C0 12.0493 0.197224 11.5727 0.54835 11.2211L11.1733 0.596133Z"
        fill="#CEBAA8"
      />
    </svg>
  );
};

export const IconEntregaProjeto: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="30"
      height="22"
      viewBox="0 0 30 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.4032 0.54835C29.7543 0.899913 29.9515 1.37647 29.9515 1.87335C29.9515 2.37023 29.7543 2.84679 29.4032 3.19835L11.2782 21.3233C10.9266 21.6745 10.45 21.8717 9.95317 21.8717C9.45629 21.8717 8.97973 21.6745 8.62817 21.3233L0.503169 13.1983C0.172147 12.8427 -0.00811142 12.3726 0.00028039 11.8868C0.0086722 11.401 0.205061 10.9374 0.548169 10.5933C0.892177 10.2502 1.3558 10.0539 1.84159 10.0455C2.32739 10.0371 2.79752 10.2173 3.15317 10.5484L9.95317 17.3483L26.7532 0.54835C27.1047 0.197223 27.5813 0 28.0782 0C28.575 0 29.0516 0.197223 29.4032 0.54835Z"
        fill="#CEBAA8"
      />
    </svg>
  );
};

export const IconSustentacao: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.2625 18.0125C2.5071 17.9832 2.75509 18.0024 2.99228 18.0689C3.22947 18.1355 3.45121 18.2482 3.64485 18.4005C3.83848 18.5528 4.0002 18.7417 4.12076 18.9566C4.24133 19.1714 4.31838 19.4079 4.3475 19.6525C4.66611 22.2875 5.74053 24.774 7.4411 26.8118C9.14167 28.8496 11.3957 30.3517 13.9311 31.1368C16.4665 31.9218 19.175 31.9563 21.7296 31.236C24.2841 30.5157 26.5756 29.0714 28.3275 27.0775L25.3175 24.0675C25.2299 23.9801 25.1702 23.8686 25.146 23.7473C25.1217 23.6259 25.1341 23.5 25.1815 23.3857C25.2289 23.2713 25.3092 23.1737 25.4122 23.105C25.5152 23.0363 25.6362 22.9998 25.76 23H34.875C35.0408 23 35.1997 23.0659 35.3169 23.1831C35.4342 23.3003 35.5 23.4593 35.5 23.625V32.74C35.5002 32.8638 35.4637 32.9849 35.395 33.0878C35.3264 33.1908 35.2287 33.2711 35.1143 33.3185C35 33.3659 34.8741 33.3783 34.7528 33.3541C34.6314 33.3299 34.5199 33.2702 34.4325 33.1825L30.9825 29.7325C28.7306 32.2213 25.8107 34.0103 22.5707 34.8863C19.3306 35.7622 15.9071 35.6883 12.7079 34.6732C9.50869 33.6581 6.66878 31.7446 4.52652 29.1608C2.38426 26.5771 1.02996 23.4319 0.625001 20.1C0.595682 19.8554 0.614852 19.6074 0.681417 19.3702C0.747982 19.1331 0.860636 18.9113 1.01294 18.7177C1.16525 18.524 1.35422 18.3623 1.56905 18.2418C1.78389 18.1212 2.02038 18.0441 2.265 18.015L2.2625 18.0125ZM18 4.25002C16.045 4.24795 14.1122 4.66378 12.331 5.46963C10.5499 6.27549 8.96156 7.45275 7.6725 8.92252L10.6825 11.9325C10.7701 12.0199 10.8298 12.1314 10.854 12.2528C10.8783 12.3742 10.8659 12.5 10.8185 12.6143C10.7711 12.7287 10.6908 12.8264 10.5878 12.895C10.4848 12.9637 10.3638 13.0002 10.24 13H1.125C0.959241 13 0.80027 12.9342 0.683059 12.817C0.565849 12.6998 0.500001 12.5408 0.500001 12.375V3.26002C0.49978 3.13624 0.536315 3.01519 0.604976 2.9122C0.673636 2.80922 0.77133 2.72894 0.885672 2.68154C1.00001 2.63414 1.12585 2.62176 1.24724 2.64597C1.36862 2.67018 1.48009 2.72989 1.5675 2.81752L5.0175 6.26752C7.26938 3.77869 10.1893 1.98972 13.4293 1.11376C16.6694 0.237792 20.0929 0.311772 23.2921 1.32688C26.4913 2.34199 29.3312 4.25542 31.4735 6.8392C33.6157 9.42298 34.97 12.5682 35.375 15.9C35.434 16.394 35.2944 16.8912 34.9868 17.2822C34.6793 17.6732 34.229 17.926 33.735 17.985C33.241 18.044 32.7439 17.9044 32.3528 17.5968C31.9618 17.2893 31.709 16.839 31.65 16.345C31.2456 13.0093 29.6337 9.93719 27.1188 7.7088C24.6039 5.48041 21.3601 4.25003 18 4.25002Z"
        fill="#CEBAA8"
      />
    </svg>
  );
};

export const IconAstronaut: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="172"
      height="162"
      viewBox="0 0 172 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M158.56 161.47H13.44L22.9 133.17H35.93V129.68C28.45 122.85 22.55 114.75 18.38 105.58L0.23999 98.63V51.02L18.38 44.07C30.43 17.61 56.93 0.529999 86 0.529999C115.07 0.529999 141.57 17.6 153.62 44.06L171.76 51.01V98.62L153.62 105.57C149.42 114.79 143.22 123.24 135.65 130.05V133.15H149.1L158.56 161.47ZM16.22 159.47H155.79L147.67 135.17H133.66V129.17L134 128.87C141.61 122.1 147.83 113.64 151.98 104.39L152.15 104.01L169.77 97.26V52.39L152.15 45.64L151.98 45.26C140.32 19.31 114.42 2.53 86 2.53C57.58 2.53 31.68 19.3 20.03 45.26L19.86 45.64L2.23999 52.39V97.25L19.86 104L20.03 104.38C24.16 113.58 30.07 121.69 37.6 128.49L37.93 128.79V135.17H24.34L16.22 159.47ZM117.1 114.21H54.59L40.42 100.04V55.2L54.58 41.04H117.32L131.17 54.89V100.15L117.1 114.21ZM55.42 112.21H116.28L129.17 99.32V55.72L116.49 43.04H55.4L42.42 56.03V99.22L55.42 112.21ZM106.53 34.73H65.47V22.91H106.54V34.73H106.53ZM67.47 32.73H104.54V24.91H67.47V32.73Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const IconFlag: React.FC<any> = ({ className }) => {
  return (
    <svg
      width="154"
      height="154"
      viewBox="0 0 154 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78.97 117.96H53.92V36.04H114.47L78.97 71.54V117.96ZM55.92 115.96H76.96V70.71L109.64 38.03H55.92V115.96Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M153.83 153.83H0.169998V0.170013H153.84V153.83H153.83ZM2.17 151.83H151.84V2.17001H2.17V151.83Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const IconCheck: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="126"
      height="120"
      viewBox="0 0 126 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.89 89.39L0.73999 52.24L2.14999 50.83L37.89 86.57L123.85 0.610001L125.26 2.02L37.89 89.39Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M37.89 119.39L0.73999 82.24L2.14999 80.83L37.89 116.57L123.85 30.61L125.26 32.02L37.89 119.39Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const IconDisk: React.FC = ({ className }: any) => {
  return (
    <svg
      width="164"
      height="164"
      viewBox="0 0 164 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M82 163.64C36.99 163.64 0.359985 127.02 0.359985 82C0.359985 36.98 36.99 0.359985 82 0.359985C127.01 0.359985 163.64 36.99 163.64 82C163.64 127.01 127.01 163.64 82 163.64ZM82 2.35999C38.09 2.35999 2.35999 38.08 2.35999 81.99C2.35999 125.9 38.09 161.64 82 161.64C125.91 161.64 161.64 125.92 161.64 82C161.64 38.08 125.91 2.35999 82 2.35999ZM81.91 95.69C77.28 95.69 74.12 93.38 72.62 91.97C71.08 90.52 68.46 87.35 68.31 82.42C68.08 74.87 74.03 68.54 81.57 68.31C81.71 68.31 81.86 68.3 82 68.3C89.44 68.3 95.45 74.13 95.68 81.57C95.91 89.12 89.96 95.45 82.42 95.68C82.25 95.69 82.08 95.69 81.91 95.69ZM82 70.31C81.88 70.31 81.75 70.31 81.63 70.32C78.52 70.42 75.62 71.72 73.48 74C71.34 76.28 70.21 79.25 70.31 82.37C70.44 86.58 72.67 89.29 73.99 90.53C75.32 91.78 78.18 93.84 82.35 93.7C88.8 93.5 93.88 88.1 93.68 81.65C93.49 75.39 88.25 70.31 82 70.31Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const IconEvelope: React.FC<any> = ({
  className,
  color = "#CC6237",
}: any) => {
  return (
    <svg
      width="150"
      height="118"
      viewBox="0 0 150 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M149.21 96.25H0.790009V0.150024H149.22V96.25H149.21ZM2.79001 94.25H147.22V2.15003H2.79001V94.25Z"
        fill={color}
        className={className}
      />
      <path
        d="M149.21 117.85H0.790009V103.76H2.79001V115.85H147.21V103.76H149.21V117.85Z"
        fill={color}
        className={className}
      />
      <path
        d="M75 55.3L21.56 22.95L22.6 21.23L75 52.96L127.4 21.23L128.44 22.95L75 55.3Z"
        fill={color}
        className={className}
      />
    </svg>
  );
};

export const IconEvelopeFull: React.FC = ({
  width = 298,
  height = 42,
}: any) => {
  return (
    <svg
      width="27"
      height="18"
      viewBox="0 0 27 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="27" height="18" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_29_10"
            transform="scale(0.037037 0.0555556)"
          />
        </pattern>
        <image
          id="image0_29_10"
          width="27"
          height="18"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAASCAYAAACq26WdAAABYklEQVQ4je2Ur0tDURiGnzsGG/4DtpUVlQVZlIMMDCsnW9RwQFCwWASxiBODWExikQODCesHg5jkgFVY0OS/MFgwyED54FsYbMy7uZv80vnxfs97Ofc9JwnOfJNR5bIyQs0awNecfYTfSGQUnFkGboH1ORg9A/vWx7dccGZHBkAN2AW6f2TSVV5N+OIjx9gMzjwBZevjHbAE3M9o1BKO8srKbw4CsgF0gjMn8kXWxy2gDnykNBF93fq4LRzldZQ/lMYicAG8BmfWrI+PQAW4BPoTTPqqq0if9AtHecWBaFT0V4AYnJHAFKyPx0AVeBljJOtV1RW0LypnqMbdM0npHvAenNm0PspRGOAA6Kmmp3Mj+6ITvfYlo6CTLvUi0A7OPAAl6+ONBuhcAyDzku63VT+20jxXn8ApcG197Adn8sAhcAYs/AYwzdsoP/4KOAJW0zTmUxqhBq0p+rJ/iP/NZivgB0jecm+f3r8sAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export const IconArrow: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="148"
      height="148"
      viewBox="0 0 148 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.72 147.99L0.339996 120.6L82.2 38.74H2.76V0.0100098H147.66V144.91H108.93V66.78L27.72 147.99ZM3.17 120.6L27.73 145.16L110.94 61.95V142.91H145.67V2.01001H4.76V36.74H87.03L3.17 120.6Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const LineMethodology: any = () => {
  return (
    <svg
      width="1259"
      height="148"
      viewBox="0 0 1259 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 103.211C60.7794 116.155 206.532 138.161 311.309 122.627C442.281 103.211 495.539 77.8201 589.555 96.2409C683.572 114.662 844.433 163.95 947.688 141.048C1030.29 122.727 1155.65 63.3822 1208 36"
        stroke="#CEBAA8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <path
        d="M1253.89 0.631452L1255.87 0.993447C1256.65 1.13626 1257.34 1.58351 1257.8 2.23687C1258.25 2.89022 1258.42 3.69621 1258.28 4.47765L1257.92 6.45986C1257.07 11.0763 1254.5 15.1965 1250.72 17.9782L1248.25 19.7963C1247.23 20.5471 1246.17 21.2498 1245.09 21.9019L1243.54 30.3865C1243.35 31.4222 1242.63 32.281 1241.64 32.651L1233.21 35.8238C1233.02 35.8959 1232.81 35.9212 1232.61 35.8975C1232.4 35.8739 1232.21 35.802 1232.04 35.6879C1231.87 35.5737 1231.73 35.4206 1231.63 35.2413C1231.53 35.062 1231.48 34.8618 1231.47 34.6572L1231.26 26.661C1231.19 26.5791 1231.12 26.4921 1231.06 26.4006L1228.52 22.4663L1225.74 18.6981C1225.68 18.6106 1225.62 18.5186 1225.57 18.4226L1218.17 15.3938C1217.98 15.3166 1217.81 15.1951 1217.67 15.0395C1217.54 14.8838 1217.45 14.6986 1217.4 14.4992C1217.35 14.2998 1217.35 14.0921 1217.4 13.8933C1217.45 13.6946 1217.55 13.5106 1217.68 13.3567L1223.64 6.58882C1224.33 5.79856 1225.39 5.42974 1226.43 5.61905L1234.91 7.16953C1235.9 6.38508 1236.93 5.64766 1238 4.9597L1240.57 3.28963C1244.51 0.739054 1249.27 -0.211859 1253.89 0.631144L1253.89 0.631452ZM1241.97 5.44544L1239.39 7.11382C1236.97 8.68344 1234.73 10.5231 1232.73 12.5974L1228.02 17.4631L1230.61 20.9724C1230.63 20.9943 1230.65 21.0169 1230.66 21.0402L1233.02 24.7058L1239.24 22.0263C1241.89 20.882 1244.4 19.4398 1246.73 17.7275L1249.2 15.9111C1252.45 13.5172 1254.67 9.97128 1255.39 5.99844L1255.75 4.01792C1255.77 3.90625 1255.75 3.79105 1255.68 3.69766C1255.62 3.60427 1255.52 3.54034 1255.41 3.51993L1253.43 3.15763C1249.46 2.43192 1245.36 3.25026 1241.97 5.44544ZM1224.38 30.4802C1221.97 32.1441 1217.36 31.7129 1215.93 31.5295C1215.87 31.5228 1215.82 31.5044 1215.77 31.4754C1215.72 31.4465 1215.68 31.4076 1215.65 31.3613C1215.62 31.3144 1215.6 31.2613 1215.59 31.2055C1215.58 31.1497 1215.58 31.0925 1215.59 31.0375C1215.93 29.6333 1217.15 25.1723 1219.56 23.5084C1221.35 22.2697 1224.22 22.793 1225.46 24.5858C1226.69 26.3785 1226.17 29.2415 1224.38 30.4802ZM1226.02 15.8347L1230.88 10.8134C1231.37 10.3015 1231.88 9.8045 1232.4 9.3214L1225.96 8.14522C1225.89 8.13201 1225.82 8.13776 1225.75 8.16192C1225.68 8.18608 1225.62 8.22784 1225.57 8.28313L1220.81 13.6991L1226.02 15.8347ZM1242.19 23.4884C1241.55 23.8035 1240.91 24.1017 1240.25 24.3842L1233.84 27.1492L1233.99 32.7859L1240.74 30.2482C1240.81 30.2221 1240.87 30.1787 1240.92 30.1221C1240.97 30.0655 1241 29.9976 1241.01 29.9251L1242.19 23.4884ZM1246.9 11.9726C1246.84 12.3045 1246.72 12.6211 1246.54 12.9044C1246.35 13.1877 1246.11 13.4322 1245.84 13.6239C1245.56 13.8155 1245.25 13.9507 1244.92 14.0215C1244.59 14.0924 1244.25 14.0975 1243.92 14.0368C1243.58 13.976 1243.27 13.8505 1242.98 13.6674C1242.7 13.4842 1242.46 13.2471 1242.26 12.9695C1242.07 12.6919 1241.94 12.3792 1241.87 12.0494C1241.8 11.7196 1241.79 11.379 1241.85 11.0472C1241.97 10.377 1242.36 9.78306 1242.92 9.39596C1243.48 9.00886 1244.17 8.86033 1244.84 8.98305C1245.51 9.10577 1246.1 9.48969 1246.49 10.0503C1246.88 10.611 1247.03 11.3025 1246.9 11.9726Z"
        fill="#CEBAA8"
      />
    </svg>
  );
};

export const IconGlobal: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 159.22C36.32 159.22 0.780029 123.68 0.780029 80C0.780029 36.32 36.32 0.779999 80 0.779999C123.68 0.779999 159.22 36.32 159.22 80C159.22 123.68 123.68 159.22 80 159.22ZM80 2.78C37.42 2.78 2.78003 37.42 2.78003 80C2.78003 122.58 37.42 157.22 80 157.22C122.58 157.22 157.22 122.58 157.22 80C157.22 37.42 122.58 2.78 80 2.78Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M80 159.22C58.5 159.22 41.02 123.68 41.02 80C41.02 36.32 58.51 0.779999 80 0.779999C101.49 0.779999 118.98 36.32 118.98 80C118.98 123.68 101.5 159.22 80 159.22ZM80 2.78C59.61 2.78 43.02 37.42 43.02 80C43.02 122.58 59.61 157.22 80 157.22C100.39 157.22 116.98 122.58 116.98 80C116.98 37.42 100.39 2.78 80 2.78Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M80 159.22C58.5 159.22 41.02 123.68 41.02 80C41.02 36.32 58.51 0.779999 80 0.779999C101.49 0.779999 118.98 36.32 118.98 80C118.98 123.68 101.5 159.22 80 159.22ZM80 2.78C59.61 2.78 43.02 37.42 43.02 80C43.02 122.58 59.61 157.22 80 157.22C100.39 157.22 116.98 122.58 116.98 80C116.98 37.42 100.39 2.78 80 2.78Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M158.22 79H1.78003V81H158.22V79Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M81 1.78H79V158.22H81V1.78Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const IconClock: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="166"
      height="166"
      viewBox="0 0 166 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M83 147.62C47.37 147.62 18.38 118.63 18.38 83C18.38 47.37 47.37 18.38 83 18.38C118.63 18.38 147.62 47.37 147.62 83C147.62 118.63 118.63 147.62 83 147.62ZM83 20.38C48.47 20.38 20.38 48.47 20.38 83C20.38 117.53 48.47 145.62 83 145.62C117.53 145.62 145.62 117.53 145.62 83C145.62 48.47 117.53 20.38 83 20.38Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M83 165.47C37.53 165.47 0.530029 128.47 0.530029 83C0.530029 37.53 37.53 0.529999 83 0.529999C128.47 0.529999 165.47 37.53 165.47 83C165.47 128.47 128.47 165.47 83 165.47ZM83 2.53C38.63 2.53 2.53003 38.63 2.53003 83C2.53003 127.37 38.63 163.47 83 163.47C127.37 163.47 163.47 127.37 163.47 83C163.47 38.63 127.37 2.53 83 2.53Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M83 88.37C80.04 88.37 77.63 85.96 77.63 83C77.63 80.04 80.04 77.63 83 77.63C85.96 77.63 88.37 80.04 88.37 83C88.37 85.96 85.96 88.37 83 88.37ZM83 79.63C81.14 79.63 79.63 81.14 79.63 83C79.63 84.86 81.14 86.37 83 86.37C84.86 86.37 86.37 84.86 86.37 83C86.37 81.14 84.86 79.63 83 79.63Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M49.4594 47.9953L48.0452 49.4095L79.1929 80.5573L80.6071 79.1431L49.4594 47.9953Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M121.68 82H86.8V84H121.68V82Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const IconArrowRight: React.FC = ({ width = 298, height = 42 }: any) => {
  return (
    <svg
      width="34"
      height="68"
      viewBox="0 0 34 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 2L31 34L2 66" stroke="black" strokeWidth="2" />
    </svg>
  );
};
export const IconArrowLeft: React.FC = ({ width = 298, height = 42 }: any) => {
  return (
    <svg
      style={{ transform: "rotate(180deg)" }}
      width="34"
      height="68"
      viewBox="0 0 34 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 2L31 34L2 66" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export const IconLocal: React.FC = ({ width = 298, height = 42 }: any) => {
  return (
    <svg
      width="32"
      height="41"
      viewBox="0 0 32 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="41" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_27_7" transform="scale(0.03125 0.0243902)" />
        </pattern>
        <image
          id="image0_27_7"
          width="32"
          height="41"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAApCAYAAABUdSs8AAAC1klEQVRYhb2XW4hNYRTHf/YMxeRaHuR+GYUHGaGkTDx4Qg2RYpp5kKYkRUlhlDQpkRIeJJEochkeJGJEuTy4TE1eZExRDJ4cygxHq9anbXf23uvbZ5/516l99rf2+v/3Xt+6fINuNS/BiDHAamApUAdMAkbqo9+BHuAl0AFcBz5b3FoELAB2KXm1UewfFXEIeJZkGCSsjQXOq4M1HuTObwPwFDinX89LwCLgBbDRgzQOmzQ0860ClgP3gfE5kDtMBB4Cy9IELARuAkNzJHcYBrQDc+MESJyuVojcoQa4AYwoJeBwzp89DpOBtqiAeUDzAJA7bAFmyLVLrR2eDvq14HQBRWA2UO+RqlXAHqCpWuPR4EF+CdgJfIjcl/AdAdYZ/awFtkoIVnlsvIPAhhLk6L31Wv0skA25QgQsNj5wF9hrsNut4bGgPtDct2CfxjsNRbW1oE4ETDAYSmd7YnQqeAR8M9hNDZIaRQjvjG/vIN3wrcFunAgYbDCs8SB3GG4xClRtGmaGy6cBo1yhSUGfCPhoMBzi2ZobjUWpVwS8MTrdr2NYGqaorQVdQdrIFIJMSLeBaQk2tcAdYLTR5/NAnVoxC3itFXGO1vQqvW7TyafWw1+7DKUiolunFl+4DZw0W8ZBUnu6y4ITGRw44izkgqNSW9zDx4FPGR1lgZwhTrs3QA8WvjNBOdgO/AwLEFwALg4A+VngmvsTjd9m3eWVQqcMIWHfUQEFPYJZOpkvvurwU0gSgKakjFW/cyTv1xGsO7oQl0L3ct6U24AHpRaScvgYcCYH8lPAybjFtCLSAjwug7xD3z4WaQJ+6dG8JwP5e417XzkC0AopmfHDg7ygO/5LmqG1jkuXa/IQ0GitJz6N5DJwwGDXqqdsE3w7WWu4jJbAFaPIf/AVUNTP21li7ZWGyWd8z9TLpXPKBpPS6tCrG/W/MlspAQIpqXKiFmL5rdS08wPwF55Rhh5fL1jvAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export const IconInstagram: React.FC = ({ width = 298, height = 42 }: any) => {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="37" height="37" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_27_5" transform="scale(0.027027)" />
        </pattern>
        <image
          id="image0_27_5"
          width="37"
          height="37"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADXUlEQVRYhcWYW0hVURCGP3cnSSoUoZfCwoyCyC4YkXaBoujBXrpR2Y0IIgiCHoNeg56CoHqJIgQrSjNK6SWQDDoF+hBYZBBJdiEC81KZp6wYmVPLcbf3Pvt4+eGwz6y9Zq1/rzUza9bkNBxcjUEOsBKoBJYDRUAhkKe/XKsQASmgX39dQCfQCjQCSeC3O4QltQq4ACyOMXFctAFHgea0vucMtEdfjCchwSKgSecfRmotUG1IjiV6dds+OzyqlceQIDZ0fhwJ3VM7rQBmATUOsXPCR/6U6xKOBwaBA7pSqOEfduRS4eOpl2WL70CPPoPwEfhk3n8DOhy5UkiVxSAkk18FdugWSKgo0GeRtl8Hfhi9mUCJaZsBzHfkMk8HyQSXgLnqLbXAe6P7Vtt3A8VqwC7qgAUqz1F5ivO+KKGBMQr6gL3AnQw+4J3a0G01aFnJJcALoBvIV0dzUehpxzAIoY0hhPID3tUD69Sw0yjwISTIi0pKVuiJVQaOa/uAfvmAxp9jZkvQfvsjzDVEKuwsu+yzQnImtgNngBXOGLl6bp4FngPLjF6tOkgQcsMCpnz5SR9CzREcRIz8IbDUtJ/w8cphCCN1C/jgyHnqLVG2XDBV+7u78Qa4my0pF0eA2REJpSHh45Bpq8+G1GMj78yQUBq7jJyMSyqlgdCFNdyosHodQXpBpPqNPD1m1pnWTTiyHMxf4pCyxtyn3hgHovvT0ZsETItDKtfH7VtjkmoxcnFQ5zBDrzDytXicRuiVB3UOI7XVyBeB1xkSksh/xbRty4bUFhOXBrTtv0Zq0KsE3AgucWtzNqQmA6dM21NA7mWvQnTbdfufmfbTauiBpFIhg0uGsN2H2EKN8A/Uu9CUuEnz7lIfQlWalQYhJZfR7pBcSCAxawPwKKBPwri9xXqgIcK52eP5BEk/yED3GbliLoIIVUUkJOj39G4fBTLgTU1rox7KYtQ3nFQ4Cro8LTZkgio18jq1txLHcOU5D9inefnLCDZk0ZnQKL0pQ8WExjA3jn3V/ClbtHhajhkNjAYhQaOnuU3bKA2YLeRykfS0YCX1oV8TTGhQb0d/I3qzXn8mili68JHEHDM1emEc762ULVvjlISGZYOCdCVPUgupxkjxY6xqnpJjpWue/wD8AZB6sny67J3YAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export const IconFacebook: React.FC = ({ width = 298, height = 42 }: any) => {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="37" height="37" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_27_3" transform="scale(0.027027)" />
        </pattern>
        <image
          id="image0_27_3"
          width="37"
          height="37"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAC50lEQVRYhc2YXYhNURTHf3Nnxpg0TYjJDGp8PUyJmiSawkg+iwhPzCgzHoQHUUaiyEdJvvKANy/KMKkR4UHjQT6iiYYilAdlkK8iDFrTOnXa9j13732uGf+63Xv3WXvt3zl77bP2XgXta+oI0BRgKjAJqAFGA+XAZ+AV8BjoBG4Dt3zdF3nYVgFrgRUKYlMZUKnAkZ4CrcBp4LnLQBkHmxLgAPAM2JUAlE3jgW0Kd1ifaCqoGUAXsBUY6AljG2uTTu3CUKgNwA1gTEoYUyOAdmC7L9Qe4GieYWxjHLddsAX6xqS7cNA9XYE/1P8gYAgwGSg2uq8H3mqsZoWaBhwJhNkPnEpYYdJebWnfCdwFLtmgBsQveGoucDVHl98J19qA4cAHjJg6BAwOAGpxADLHMiXTetI0rND59dVHYJ9jn+85ri8HxhGbvi0BQCQ8oaHAKr3ZAm2rcPC3A2iIoBoDoTotbaXAA2BUgL+VQLNMX53eWYi+WPrUBgKhKW2eQNUHOiBL8Jam8Ceqz+idharQ0q8nJVStQE1I4aDM0laSwp+oSgJ9mKOxbOCajaX90GInaWaZ8bKUvdgxx3HKizy2JF+Bsw523cAFo63aA6o4o4nTRYUpgnimh22PQL336JCUv5JU5WH7SaBeOBrLqvoWCFXpYftGYuo+MNvBWFbaQZ3uAv3IDvKmYTdWF0T0VOV7kQdUZ5E6dcl9Ek+bjbZfFqga3dOHqkOm75pDBs+mbku7LfX4qD2jcXIupaN8SR7Quyh37f1PoHYTS6hdKbbC+dKdKD7jWb6pn6Eaoh9xqNfA6v7h6V39T6I/5n7oTHwD30dq0/cf2aBE64CLfQTUASw1G7Mde5Zo6eZfqlULKH8p6SzWFHjsclGLHqmsylUKOgFMBC7nCUaqONNznRVdimaPgAXAHOA88DN2zVYAsxVNrgCLgVku5Uaf8uJ1/YzU2sF84KXFTqCl6icvQwlkSR1OZcVeAX8Ajq9+x3JiOMsAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export const IconAstronautFull: React.FC = ({
  width = 298,
  height = 42,
}: any) => {
  return (
    <svg
      width="270"
      height="252"
      viewBox="0 0 270 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M240.97 165.06L269.38 154.17V80.69L240.97 69.8C222.76 29.23 182.04 0.960022 134.69 0.960022C87.34 0.960022 46.62 29.23 28.41 69.8L0 80.69V154.16L28.41 165.05C35.08 179.91 44.78 193.11 56.71 203.89V211.73H35.56L21.59 253.52H247.79L233.82 211.73H212V204.5C224.24 193.62 234.17 180.19 240.97 165.06ZM103.65 36.52H165.73V52.13H103.65V36.52ZM204.87 157.02L183.45 178.44H85.43L63.84 156.85V86.9L85.4 65.34H183.78L204.86 86.42V157.02H204.87Z"
        fill="#CC6237"
      />
    </svg>
  );
};

export const IconChatbot: React.FC = ({ width = 100, height = 10 }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120.67 120.67"
      fill="none"
      width="50"
      height="50"
    >
      <path
        className="st0"
        d="M110.45,47.04h-5.71v-3.8c0-8.18-6.65-14.83-14.83-14.83H62.4v-7.25c3.58-0.57,6.33-3.67,6.33-7.42   c0-4.15-3.37-7.52-7.52-7.52S53.7,9.6,53.7,13.74c0,3.74,2.75,6.85,6.33,7.42v7.25H30.75c-8.18,0-14.83,6.65-14.83,14.83v3.8h-5.71   c-3.95,0-7.16,3.21-7.16,7.16v14.16c0,3.95,3.21,7.16,7.16,7.16h5.71v4.65c0,8.18,6.65,14.83,14.83,14.83h14.71v19.45L75.69,95   h14.23c8.18,0,14.83-6.65,14.83-14.83v-4.65h5.71c3.95,0,7.16-3.21,7.16-7.16V54.2C117.62,50.25,114.4,47.04,110.45,47.04z    M56.07,13.74c0-2.84,2.31-5.15,5.15-5.15c2.84,0,5.15,2.31,5.15,5.15s-2.31,5.15-5.15,5.15C58.38,18.89,56.07,16.58,56.07,13.74z    M10.21,73.15c-2.64,0-4.79-2.15-4.79-4.79V54.2c0-2.64,2.15-4.79,4.79-4.79h5.71v23.74H10.21z M102.37,80.17   c0,6.87-5.59,12.45-12.45,12.45H74.99L47.83,110.1V92.63H30.75c-6.87,0-12.45-5.59-12.45-12.45v-4.65V47.04v-3.8   c0-6.87,5.59-12.45,12.45-12.45h59.17c6.87,0,12.45,5.59,12.45,12.45v3.8v28.48V80.17z M115.24,68.35c0,2.64-2.15,4.79-4.79,4.79   h-5.71V49.41h5.71c2.64,0,4.79,2.15,4.79,4.79V68.35z"
        fill="#CC6237"
      />
      <path
        className="st0"
        d="M82.34,50.6H38.32c-5.89,0-10.67,4.79-10.67,10.67s4.79,10.67,10.67,10.67h44.02   c5.89,0,10.67-4.79,10.67-10.67S88.23,50.6,82.34,50.6z M82.34,69.58H38.32c-4.58,0-8.3-3.73-8.3-8.3s3.72-8.3,8.3-8.3h44.02   c4.58,0,8.3,3.72,8.3,8.3S86.92,69.58,82.34,69.58z"
        fill="#CC6237"
      />
      <circle className="st0" cx="46.95" cy="61.28" r="4.68" fill="#CC6237" />
      <circle className="st0" cx="73.71" cy="61.28" r="4.68" fill="#CC6237" />
    </svg>
  );
};

export const IconCash: React.FC = ({ width = 100, height = 100 }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120.67 120.67"
      fill="none"
      width="50"
      height="50"
    >
      <path
        className="st0"
        d="M60.33,109.11c-26.9,0-48.78-21.88-48.78-48.78s21.88-48.78,48.78-48.78c26.9,0,48.78,21.88,48.78,48.78    S87.23,109.11,60.33,109.11z M60.33,14.2C34.9,14.2,14.2,34.9,14.2,60.33c0,25.44,20.69,46.13,46.13,46.13    s46.13-20.69,46.13-46.13C106.46,34.9,85.77,14.2,60.33,14.2z"
        fill="#CC6237"
      />
      <path
        className="st0"
        d="M71.27,80.34H41.56v-2.65h29.71c4.22,0,7.65-3.43,7.65-7.65c0-4.22-3.43-7.65-7.65-7.65h-20    c-6.08,0-11.03-4.95-11.03-11.03c0-6.08,4.95-11.03,11.03-11.03h28.97v2.65H51.26c-4.62,0-8.38,3.76-8.38,8.38    s3.76,8.38,8.38,8.38h20c5.68,0,10.29,4.62,10.29,10.29C81.56,75.72,76.94,80.34,71.27,80.34z"
        fill="#CC6237"
      />
      <rect
        x="56.12"
        y="30.48"
        className="st0"
        width="2.65"
        height="59.71"
        fill="#CC6237"
      />
      <rect
        x="64.11"
        y="30.48"
        className="st0"
        width="2.65"
        height="59.71"
        fill="#CC6237"
      />
    </svg>
  );
};

export const IconMessage: React.FC = ({ width = 100, height = 100 }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120.67 120.67"
      fill="none"
      width="50"
      height="50"
    >
      <path
        className="st0"
        d="M11.98,41.74l40.91,25.78l25.65,41.3l30.14-96.96L11.98,41.74z M18.04,42.54l84.75-26.19L53.65,64.97  L18.04,42.54z M77.77,102.72L55.45,66.78l48.36-47.84L77.77,102.72z"
        fill="#CC6237"
      />
    </svg>
  );
};

export const IconAstroFill: React.FC = ({ width = 100, height = 100 }: any) => {
  return (
    <svg
      width="270"
      height="252"
      viewBox="0 0 270 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M240.97 165.06L269.38 154.17V80.69L240.97 69.8C222.76 29.23 182.04 0.959961 134.69 0.959961C87.34 0.959961 46.62 29.23 28.41 69.8L0 80.69V154.16L28.41 165.05C35.08 179.91 44.78 193.11 56.71 203.89V211.73H35.56L21.59 253.52H247.79L233.82 211.73H212V204.5C224.24 193.62 234.17 180.19 240.97 165.06ZM103.65 36.52H165.73V52.13H103.65V36.52ZM204.87 157.02L183.45 178.44H85.43L63.84 156.85V86.9L85.4 65.34H183.78L204.86 86.42V157.02H204.87Z"
        fill="#000000"
      />
    </svg>
  );
};

export const IconClose: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="167"
      height="167"
      viewBox="0 0 167 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M83.64 165.28C128.729 165.28 165.28 128.729 165.28 83.64C165.28 38.5515 128.729 2 83.64 2C38.5515 2 2 38.5515 2 83.64C2 128.729 38.5515 165.28 83.64 165.28Z"
        stroke="#CC6237"
        strokeWidth="3"
        strokeMiterlimit="10"
        className={className}
      />
      <path
        d="M46.352 120.928L120.928 46.352"
        stroke="#CC6237"
        strokeWidth="3"
        strokeMiterlimit="10"
        className={className}
      />
      <path
        d="M120.928 120.928L46.352 46.352"
        stroke="#CC6237"
        strokeWidth="3"
        strokeMiterlimit="10"
        className={className}
      />
    </svg>
  );
};

export const IconSimpleCheck: React.FC<any> = ({ className }: any) => {
  return (
    <svg
      width="126"
      height="120"
      viewBox="0 0 126 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.89 119.39L0.73999 82.24L2.14999 80.83L37.89 116.57L123.85 30.61L125.26 32.02L37.89 119.39Z"
        fill="#CC6237"
        className={className}
      />
    </svg>
  );
};

export const ExampleSVG: React.FC = ({ className }: any) => {
  return <svg />;
};
