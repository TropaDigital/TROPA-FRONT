import React from "react";
import Animate from "../Animation/Animate";

export const Logo: React.FC = ({ width = 298, height = 42 }: any) => {
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

export const LogoWithoutDigital: React.FC = ({
  width = 148,
  height = 32,
}: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.0875 20.5407L32.4985 19.2332V10.411L29.0875 9.10352C26.9011 4.23256 22.0122 0.838379 16.3272 0.838379C10.6422 0.838379 5.75322 4.23256 3.56687 9.10352L0.155884 10.411V19.232L3.56687 20.5395C4.36769 22.3237 5.5323 23.9085 6.96466 25.2028V26.1441H4.42532L2.74804 31.1615H29.9063L28.229 26.1441H25.6092V25.276C27.0788 23.9697 28.271 22.3573 29.0875 20.5407ZM12.6004 5.10782H20.0539V6.98201H12.6004V5.10782ZM24.7532 19.5754L22.1814 22.1472H10.4129L7.82071 19.555V11.1566L10.4093 8.56804H22.2211L24.752 11.099V19.5754H24.7532Z"
        fill="#CC6237"
      />
      <path
        d="M44.4387 18.2992H47.6876V30.8614H55.6106V18.2992H58.8595V10.375H44.4387V18.2992Z"
        fill="#D8BCA9"
      />
      <path
        d="M108.243 10.4819V30.8602H116.011V28.142H124.157L127.837 24.4633V14.2891L124.028 10.4819H108.243ZM120.068 20.3739H116.011V18.2512H120.068V20.3739Z"
        fill="#D8BCA9"
      />
      <path
        d="M95.7574 10.2573C90.0448 10.2573 85.3959 14.905 85.3959 20.6188C85.3959 26.3314 90.0436 30.9802 95.7574 30.9802C101.471 30.9802 106.119 26.3326 106.119 20.6188C106.118 14.905 101.47 10.2573 95.7574 10.2573ZM97.3866 20.5671C97.4142 21.4664 96.7059 22.2204 95.8066 22.248C95.2183 22.2696 94.8233 21.9791 94.6396 21.8062C94.4559 21.6333 94.1449 21.2563 94.1269 20.668C94.0993 19.7687 94.8077 19.0147 95.7069 18.9871C95.7238 18.9871 95.7406 18.9859 95.7586 18.9859C96.6338 18.9871 97.3602 19.6859 97.3866 20.5671Z"
        fill="#D8BCA9"
      />
      <path
        d="M61.3051 30.8593H69.0732V18.1482H75.0187L71.0638 22.1031V30.8593H83.189V23.0912H81.0627L83.2706 20.882V10.3789H61.3051V30.8593Z"
        fill="#D8BCA9"
      />
      <path
        d="M130.201 10.4819V30.8614H137.97V18.25H140.076V30.8614H147.844V10.4819H130.201Z"
        fill="#D8BCA9"
      />
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

export const IconEvelope: React.FC<any> = ({ className }: any) => {
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
        fill="#CC6237"
        className={className}
      />
      <path
        d="M149.21 117.85H0.790009V103.76H2.79001V115.85H147.21V103.76H149.21V117.85Z"
        fill="#CC6237"
        className={className}
      />
      <path
        d="M75 55.3L21.56 22.95L22.6 21.23L75 52.96L127.4 21.23L128.44 22.95L75 55.3Z"
        fill="#CC6237"
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

export const IconArrow: React.FC = ({ className }: any) => {
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
        stroke-width="3"
        stroke-miterlimit="10"
        className={className}
      />
      <path
        d="M46.352 120.928L120.928 46.352"
        stroke="#CC6237"
        stroke-width="3"
        stroke-miterlimit="10"
        className={className}
      />
      <path
        d="M120.928 120.928L46.352 46.352"
        stroke="#CC6237"
        stroke-width="3"
        stroke-miterlimit="10"
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

export const EyeIcon = ({ color = "#069CD1", size = 24 }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.11824 12.467C2.96124 12.176 2.96124 11.823 3.11824 11.532C5.01024 8.033 8.50524 5 12.0002 5C15.4952 5 18.9902 8.033 20.8822 11.533C21.0392 11.824 21.0392 12.177 20.8822 12.468C18.9902 15.967 15.4952 19 12.0002 19C8.50524 19 5.01024 15.967 3.11824 12.467Z"
      stroke="#ADBDBA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1213 9.87868C15.2929 11.0502 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87868 14.1213C8.70711 12.9497 8.70711 11.0502 9.87868 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868"
      stroke="#ADBDBA"
      strokeWidth="1.4286"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EyeIconClose = ({ color = "#ADBDBA", size = 24 }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5582 13.5577C13.9186 14.6361 12.6764 15.2036 11.4426 14.981C10.2087 14.7585 9.24301 13.7928 9.02048 12.559C8.79795 11.3251 9.36544 10.0829 10.4438 9.44333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.9969 16.9962C16.2721 18.3044 14.1651 19.0095 12.0003 19.0029C8.41322 19.0668 5.09886 17.0953 3.44275 13.9128C2.84786 12.707 2.84786 11.293 3.44275 10.0872C4.271 8.43782 5.5913 7.08656 7.22105 6.22031"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.4272 14.1345C20.4674 14.0585 20.5196 13.9903 20.5576 13.9128C21.1524 12.707 21.1524 11.293 20.5576 10.0872C18.9015 6.90462 15.5871 4.9332 12 4.99708C11.7751 4.99708 11.5565 5.02709 11.3345 5.04172"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0037 20.0033L3.99658 2.99625"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PageIcon = ({ color = "#212928", size = 24 }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 14H14V21H21V14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14H3V21H10V14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3H14V10H21V3Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 3H3V10H10V3Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronTopIcon = ({ color = "#ADBDBA", size = 18 }: any) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5286 0.528636C3.78895 0.268287 4.21106 0.268287 4.47141 0.528636L7.80474 3.86197C8.06509 4.12232 8.06509 4.54443 7.80474 4.80478C7.54439 5.06513 7.12228 5.06513 6.86193 4.80478L4 1.94285L1.13807 4.80478C0.877722 5.06513 0.455612 5.06513 0.195262 4.80478C-0.0650874 4.54443 -0.0650874 4.12232 0.195262 3.86197L3.5286 0.528636Z"
      fill={color}
    />
  </svg>
);

export const ExitIcon: React.FC = ({ size = 18, color = "#212529" }: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 9H1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99902 4L13 9.001L7.99902 14.001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 1H15C16.105 1 17 1.895 17 3V15C17 16.105 16.105 17 15 17H13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PersonIcon = ({ color = "#069CD1", size = 18 }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm-6 8q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563q.437-.712 1.162-1.087q1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163q.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20Z"
    />
  </svg>
);

export const LogoutIcon = ({ color = "#069CD1", size = 18 }: any) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.99829 10.0008V12.0016C3.99829 13.1066 4.89409 14.0024 5.99912 14.0024H12.0016C13.1067 14.0024 14.0025 13.1066 14.0025 12.0016V3.99827C14.0025 2.89324 13.1067 1.99744 12.0016 1.99744H5.99912C4.89409 1.99744 3.99829 2.89324 3.99829 3.99827V5.9991"
      stroke="#F03D3D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10.0007L10.0008 7.99986L8 5.99902"
      stroke="#F03D3D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.99756 7.99998H10.0009"
      stroke="#F03D3D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ImageIcon: React.FC = ({ size = 18, color = "#323232" }: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0025 12.3345C15.0025 13.8079 13.8081 15.0023 12.3347 15.0023H5.66528C4.1919 15.0023 2.9975 13.8079 2.9975 12.3345V5.66509C2.9975 4.19172 4.1919 2.99731 5.66528 2.99731H12.3347C13.8081 2.99731 15.0025 4.19172 15.0025 5.66509V12.3345Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.9975 9.66681L3.8613 8.803C4.16286 8.50145 4.57186 8.33203 4.99833 8.33203C5.4248 8.33203 5.8338 8.50145 6.13536 8.803L9 11.6676"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66727 15.0025L9.8658 10.804C10.4938 10.176 11.5119 10.176 12.1398 10.804L14.7671 13.4312"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon: React.FC = ({ size = 18, color = "#667085" }: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MenuIcon = ({ color = "#212529", size = 25 }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.497 17.5022C12.2219 17.5022 11.9968 17.7273 11.9998 18.0024C11.9998 18.2775 12.2249 18.5026 12.5 18.5026C12.7751 18.5026 13.0002 18.2775 13.0002 18.0024C13.0002 17.7273 12.7751 17.5022 12.497 17.5022"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.497 11.4996C12.2219 11.4996 11.9968 11.7247 11.9998 11.9998C11.9998 12.275 12.2249 12.5001 12.5 12.5001C12.7751 12.5001 13.0002 12.275 13.0002 11.9998C13.0002 11.7247 12.7751 11.4996 12.497 11.4996"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.497 5.49719C12.2219 5.49719 11.9968 5.72229 11.9998 5.9974C11.9998 6.27252 12.2249 6.49761 12.5 6.49761C12.7751 6.49761 13.0002 6.27252 13.0002 5.9974C13.0002 5.72229 12.7751 5.49719 12.497 5.49719"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = ({ color = "#F03D3D", size = 18 }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33331 5.33337L10.6666 10.6667"
      stroke={color}
      strokeWidth="1.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6666 5.33337L5.33331 10.6667"
      stroke={color}
      strokeWidth="1.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PencilIcon = ({ color = "#495755", size = 16 }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.52865 10.4126L10.4126 3.52862C10.6726 3.26862 11.0946 3.26862 11.3546 3.52862L12.472 4.64595C12.732 4.90595 12.732 5.32795 12.472 5.58795L5.58731 12.4713C5.46265 12.5966 5.29331 12.6666 5.11665 12.6666H3.33331V10.8833C3.33331 10.7066 3.40331 10.5373 3.52865 10.4126Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.16669 4.77332L11.2267 6.83332"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ExampleSVG: React.FC = ({ className }: any) => {
  return <svg />;
};
