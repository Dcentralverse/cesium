import React, { useEffect } from "react";
import { useDrawContext } from "../../Contexts/DrawContext";
import "./toolbox.css";

const Toolbox = () => {
  const { drawingMode, setDrawingMode } = useDrawContext();

  const handleChangeDrawingMode = (mode) => {
    setDrawingMode(mode);
  };

  useEffect(() => {
    console.log(drawingMode);
  }, [drawingMode]);

  return (
    <div className="wrapper">
      <a
        onClick={() => handleChangeDrawingMode("line")}
        className="three-tools"
        title="Edit Mode"
      >
        <svg
          width="78"
          height="67"
          viewBox="0 0 78 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="ico_debug" className="group-elevated">
            <path
              className="color-gradient"
              d="M64.149 47.2045L72.8544 42.2417L71.1833 41.7354L62.8682 46.475L55.96 42.5367L63.7546 38.0163L63.2016 36.8683L54.6832 41.8072L49.1168 38.6342L48.6614 39.838L53.4106 42.5446L48.7346 45.2593L49.4543 46.3116L54.6873 43.2741L61.5833 47.2045L54.7808 51.0831L49.2347 47.9619L47.9011 48.6555L53.5041 51.8126L46.417 55.8506L40.4724 52.5261L39.5901 53.3632L45.1402 56.5801L38.4353 60.4029L31.7385 56.5841L37.6709 53.14L36.4755 52.3667L30.4618 55.8546L23.3747 51.8166L29.3111 48.3765L27.8595 47.7506L22.0979 51.0871L15.2873 47.2045L22.1874 43.2701L27.1764 46.1641L27.3147 44.7729L23.4641 42.5446L27.6603 40.1529L27.335 38.8773L22.1955 41.8072L14.3196 37.239L13.7625 38.387L20.9188 42.5327L14.0024 46.475L6.34606 42.1101L4.93107 42.7639L12.7216 47.2045L4.5204 51.8803L5.66296 52.6935L14.0024 47.938L20.8212 51.8245L13.7747 55.9064L14.3277 57.0544L22.102 52.554L29.1891 56.592L21.8784 60.8294L22.4313 61.9774L30.4659 57.3215L37.1504 61.1323L29.5307 65.4773L30.0796 66.6293L38.4353 61.8658L47.4416 67L47.9905 65.848L39.7202 61.1323L46.4129 57.3175L55.0898 62.3481L55.6428 61.2001L47.6896 56.592L54.7768 52.55L63.1894 57.4252L63.7465 56.2771L56.0535 51.8205L62.8682 47.938L71.9395 53.1081L72.9276 52.2112L64.149 47.2045Z"
              fill="url(#paint_linear_gradient_001-2)"
            />
            <path
              className="color-static"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.7741 16.1876C38.1865 15.9373 38.7003 15.9375 39.1125 16.1879L53.0181 24.6361C53.1287 24.665 53.2365 24.7089 53.3384 24.7679C53.7474 25.0045 54 25.4467 54 25.9258V43.0742C54 43.5442 53.7568 43.9794 53.3601 44.2192L39.1482 52.8135C38.7364 53.0625 38.2239 53.0622 37.8124 52.8127L23.6386 44.2184C23.2426 43.9784 23 43.5436 23 43.0742V25.9258C23 25.5656 23.1428 25.2262 23.3875 24.9794C23.471 24.8878 23.5679 24.8075 23.6762 24.7418L37.7741 16.1876ZM25.6142 28.2735V42.3172L37.1739 49.3263V35.3152L25.6142 28.2735ZM39.7881 35.3229V49.3295L51.3858 42.3162V28.2856L39.7881 35.3229ZM50.0891 25.9573L38.4426 18.8817L26.8982 25.8865L38.5519 32.9665L50.0891 25.9573Z"
              fill="white"
            />
            <path
              className="color-static"
              d="M69.435 52.3413C69.1787 52.3424 68.9266 52.2757 68.7042 52.1478L48.4213 40.4224C48.2538 40.3269 48.1067 40.1991 47.9886 40.0463C47.8705 39.8935 47.7837 39.7189 47.7331 39.5323C47.6826 39.3458 47.6694 39.151 47.6943 38.9594C47.7191 38.7677 47.7815 38.5828 47.8779 38.4154C47.9743 38.248 48.1028 38.1014 48.2559 37.984C48.409 37.8666 48.5838 37.7807 48.7702 37.7313C48.9566 37.6819 49.1508 37.6699 49.3418 37.6961C49.5328 37.7223 49.7168 37.7861 49.8831 37.8839L70.1659 49.6093C70.4431 49.7712 70.6595 50.0202 70.7816 50.3176C70.9037 50.6151 70.9249 50.9446 70.8418 51.2554C70.7586 51.5661 70.5759 51.8407 70.3216 52.037C70.0674 52.2332 69.7559 52.3402 69.435 52.3413Z"
              fill="white"
            />
            <path
              className="color-static"
              d="M72.5 48.5L76 55L64.8289 53.3098L72.5 48.5Z"
              fill="white"
            />
            <path
              className="color-static"
              d="M7.56497 52.3408C7.25542 52.3357 6.95573 52.2289 6.7104 52.0362C6.46508 51.8434 6.2872 51.5751 6.20317 51.271C6.11914 50.9669 6.13345 50.6433 6.24398 50.3482C6.3545 50.0531 6.55533 49.8022 6.81667 49.6328L26.7847 37.8843C26.9484 37.7863 27.1295 37.7224 27.3176 37.6962C27.5056 37.6699 27.6969 37.6819 27.8803 37.7314C28.0638 37.7809 28.2359 37.867 28.3866 37.9846C28.5374 38.1023 28.6639 38.2492 28.7587 38.4169C28.8536 38.5846 28.9151 38.7698 28.9395 38.9619C28.964 39.154 28.951 39.3491 28.9013 39.536C28.8516 39.7229 28.7661 39.8979 28.6498 40.051C28.5335 40.204 28.3887 40.3321 28.2238 40.4278L8.2557 52.1763C8.04304 52.2906 7.80521 52.3472 7.56497 52.3408V52.3408Z"
              fill="white"
            />
            <path
              className="color-static"
              d="M12 53L0.999991 54.5L4.5 48.5L12 53Z"
              fill="white"
            />
            <path
              className="color-gradient"
              d="M38.5 22C38.1022 22 37.7206 21.871 37.4393 21.6414C37.158 21.4118 37 21.1005 37 20.7758V4.22423C37 3.89954 37.158 3.58815 37.4393 3.35857C37.7206 3.12898 38.1022 3 38.5 3C38.8978 3 39.2794 3.12898 39.5607 3.35857C39.842 3.58815 40 3.89954 40 4.22423V20.7758C40 21.1005 39.842 21.4118 39.5607 21.6414C39.2794 21.871 38.8978 22 38.5 22V22Z"
              fill="url(#paint_linear_gradient_001)"
            />
            <path
              className="color-gradient"
              d="M35 6.15257L38.5547 0L42.1054 6.15257H35Z"
              fill="url(#paint_linear_gradient_001)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint_linear_gradient_001-2"
              x1="12.1198"
              y1="51.9322"
              x2="64.2222"
              y2="51.9322"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11e8bb" />
              <stop offset="1" stopColor="#8200c9" />
            </linearGradient>
            <linearGradient
              id="paint_linear_gradient_001"
              x1="38.5547"
              y1="19.8951"
              x2="38.5547"
              y2="-1.01796"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11e8bb" />
              <stop offset="0.99" stopColor="#8200c9" />
            </linearGradient>
          </defs>
        </svg>
      </a>

      <a
        onClick={() => handleChangeDrawingMode("polygon")}
        className="three-tools"
        title="Change Camera"
      >
        <svg
          width="75"
          height="62"
          viewBox="0 0 75 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="ico_camera" className="group-elevated">
            <path
              className="color-gradient"
              d="M59.9752 42.2045L68.6806 37.2417L67.0094 36.7354L58.6944 41.475L51.7861 37.5366L59.5808 33.0163L59.0278 31.8683L50.5094 36.8072L44.5608 33.387L44.1054 34.5908L49.2367 37.5446L44.5608 40.2592L45.2805 41.3116L50.5135 38.2741L57.4095 42.2045L50.607 46.0831L36.88 38.7285L35.5463 39.4221L49.3302 46.8125L42.2431 50.8506L22.325 39.4221L21.4427 40.2592L40.9664 51.58L34.2615 55.4028L27.5647 51.584L46.5939 40.5462L45.3985 39.7729L26.288 50.8546L19.2008 46.8165L27.3573 42.1025L25.9057 41.4767L17.9241 46.0871L11.1135 42.2045L18.0135 38.2701L23.0026 41.1641L23.1408 39.7729L19.2903 37.5446L25.8541 33.977L25.0153 33.0163L18.0217 36.8072L10.1457 32.239L9.5887 33.387L16.7449 37.5327L9.8286 41.475L2.17223 37.1101L0.757243 37.7639L8.54779 42.2045L0.346573 46.8803L1.48913 47.6935L9.8286 42.938L16.6474 46.8245L9.6009 50.9064L10.1539 52.0544L17.9282 47.554L25.0153 51.592L17.7045 55.8293L18.2575 56.9774L26.292 52.3215L32.9766 56.1323L25.3568 60.4773L25.9057 61.6293L34.2615 56.8658L43.2678 62L43.8167 60.848L35.5463 56.1323L42.2391 52.3175L50.916 57.3481L51.469 56.2001L43.5158 51.592L50.6029 47.55L59.0156 52.4251L59.5726 51.2771L51.8797 46.8205L58.6944 42.938L67.7657 48.1081L68.7538 47.2112L59.9752 42.2045Z"
              fill="url(#paint_linear_gradient_002)"
            />
            <g>
              <path
                className="color-static"
                d="M56.4131 22.1857C56.5321 22.1271 56.6694 22.1181 56.795 22.1607C56.9206 22.2034 57.024 22.2941 57.0827 22.4131C57.1413 22.532 57.1503 22.6694 57.1077 22.7949C57.065 22.9205 56.9743 23.024 56.8553 23.0826C56.7364 23.1413 56.599 23.1503 56.4735 23.1076C56.3479 23.065 56.2444 22.9742 56.1858 22.8553C56.1271 22.7364 56.1181 22.599 56.1608 22.4734C56.2034 22.3479 56.2942 22.2444 56.4131 22.1857Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M58.3069 22.8288C58.4259 22.7701 58.5632 22.7611 58.6888 22.8038C58.8144 22.8464 58.9179 22.9372 58.9765 23.0561C59.0351 23.175 59.0441 23.3124 59.0015 23.438C58.9589 23.5635 58.8681 23.667 58.7491 23.7257C58.6302 23.7843 58.4928 23.7933 58.3673 23.7507C58.2417 23.708 58.1382 23.6173 58.0796 23.4983C58.0209 23.3794 58.012 23.242 58.0546 23.1165C58.0972 22.9909 58.188 22.8874 58.3069 22.8288Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M60.2007 23.4718C60.3197 23.4131 60.457 23.4041 60.5826 23.4468C60.7082 23.4894 60.8117 23.5802 60.8703 23.6991C60.9289 23.8181 60.9379 23.9554 60.8953 24.081C60.8527 24.2066 60.7619 24.31 60.643 24.3687C60.524 24.4273 60.3867 24.4363 60.2611 24.3937C60.1355 24.3511 60.032 24.2603 59.9734 24.1413C59.9148 24.0224 59.9058 23.885 59.9484 23.7595C59.991 23.6339 60.0818 23.5304 60.2007 23.4718Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M62.0945 24.1148C62.2135 24.0562 62.3508 24.0472 62.4764 24.0898C62.602 24.1324 62.7055 24.2232 62.7641 24.3422C62.8228 24.4611 62.8317 24.5985 62.7891 24.724C62.7465 24.8496 62.6557 24.9531 62.5368 25.0117C62.4178 25.0704 62.2805 25.0794 62.1549 25.0367C62.0293 24.9941 61.9258 24.9033 61.8672 24.7844C61.8086 24.6654 61.7996 24.5281 61.8422 24.4025C61.8848 24.2769 61.9756 24.1735 62.0945 24.1148Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M63.9884 24.7578C64.1073 24.6992 64.2447 24.6902 64.3702 24.7328C64.4958 24.7755 64.5993 24.8662 64.6579 24.9852C64.7166 25.1041 64.7256 25.2415 64.6829 25.367C64.6403 25.4926 64.5495 25.5961 64.4306 25.6547C64.3116 25.7134 64.1743 25.7224 64.0487 25.6797C63.9231 25.6371 63.8197 25.5463 63.761 25.4274C63.7024 25.3085 63.6934 25.1711 63.736 25.0455C63.7786 24.92 63.8694 24.8165 63.9884 24.7578Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M65.8822 25.4009C66.0011 25.3422 66.1385 25.3332 66.264 25.3759C66.3896 25.4185 66.4931 25.5093 66.5517 25.6282C66.6104 25.7471 66.6194 25.8845 66.5767 26.0101C66.5341 26.1356 66.4433 26.2391 66.3244 26.2978C66.2054 26.3564 66.0681 26.3654 65.9425 26.3228C65.817 26.2801 65.7135 26.1894 65.6548 26.0704C65.5962 25.9515 65.5872 25.8141 65.6298 25.6886C65.6725 25.563 65.7632 25.4595 65.8822 25.4009Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M67.776 26.0439C67.8949 25.9853 68.0323 25.9763 68.1578 26.0189C68.2834 26.0615 68.3869 26.1523 68.4455 26.2712C68.5042 26.3902 68.5132 26.5275 68.4705 26.6531C68.4279 26.7787 68.3371 26.8822 68.2182 26.9408C68.0993 26.9994 67.9619 27.0084 67.8363 26.9658C67.7108 26.9232 67.6073 26.8324 67.5486 26.7135C67.49 26.5945 67.481 26.4572 67.5236 26.3316C67.5663 26.206 67.657 26.1025 67.776 26.0439Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M69.6698 26.6869C69.7887 26.6283 69.9261 26.6193 70.0517 26.6619C70.1772 26.7046 70.2807 26.7953 70.3393 26.9143C70.398 27.0332 70.407 27.1706 70.3643 27.2961C70.3217 27.4217 70.2309 27.5252 70.112 27.5838C69.9931 27.6425 69.8557 27.6515 69.7301 27.6088C69.6046 27.5662 69.5011 27.4754 69.4424 27.3565C69.3838 27.2375 69.3748 27.1002 69.4174 26.9746C69.4601 26.8491 69.5508 26.7456 69.6698 26.6869Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M71.5636 27.33C71.6825 27.2713 71.8199 27.2623 71.9455 27.305C72.071 27.3476 72.1745 27.4384 72.2332 27.5573C72.2918 27.6762 72.3008 27.8136 72.2582 27.9392C72.2155 28.0647 72.1248 28.1682 72.0058 28.2269C71.8869 28.2855 71.7495 28.2945 71.6239 28.2519C71.4984 28.2092 71.3949 28.1185 71.3363 27.9995C71.2776 27.8806 71.2686 27.7432 71.3113 27.6176C71.3539 27.4921 71.4447 27.3886 71.5636 27.33Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M73.4574 27.973C73.5763 27.9143 73.7137 27.9053 73.8393 27.948C73.9648 27.9906 74.0683 28.0814 74.127 28.2003C74.1856 28.3193 74.1946 28.4566 74.152 28.5822C74.1093 28.7078 74.0186 28.8112 73.8996 28.8699C73.7807 28.9285 73.6433 28.9375 73.5178 28.8949C73.3922 28.8523 73.2887 28.7615 73.2301 28.6425C73.1714 28.5236 73.1624 28.3862 73.2051 28.2607C73.2477 28.1351 73.3385 28.0316 73.4574 27.973Z"
                fill="white"
              />
            </g>
            <g>
              <path
                className="color-static"
                d="M56.1798 5.10163C56.2456 4.98649 56.3545 4.90221 56.4824 4.86732C56.6103 4.83243 56.7469 4.84979 56.862 4.91559C56.9772 4.98138 57.0614 5.09022 57.0963 5.21816C57.1312 5.34609 57.1139 5.48265 57.0481 5.59778C56.9823 5.71292 56.8734 5.7972 56.7455 5.83209C56.6176 5.86698 56.481 5.84962 56.3659 5.78382C56.2507 5.71803 56.1665 5.60919 56.1316 5.48126C56.0967 5.35332 56.114 5.21676 56.1798 5.10163Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M58.1094 4.57543C58.1752 4.4603 58.284 4.37601 58.4119 4.34112C58.5399 4.30624 58.6764 4.3236 58.7916 4.38939C58.9067 4.45519 58.991 4.56402 59.0259 4.69196C59.0608 4.8199 59.0434 4.95645 58.9776 5.07159C58.9118 5.18672 58.803 5.271 58.675 5.30589C58.5471 5.34078 58.4105 5.32342 58.2954 5.25763C58.1803 5.19183 58.096 5.08299 58.0611 4.95506C58.0262 4.82712 58.0436 4.69057 58.1094 4.57543Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M60.0389 4.04923C60.1047 3.9341 60.2135 3.84982 60.3415 3.81493C60.4694 3.78004 60.606 3.7974 60.7211 3.86319C60.8362 3.92899 60.9205 4.03783 60.9554 4.16576C60.9903 4.2937 60.9729 4.43026 60.9071 4.54539C60.8413 4.66053 60.7325 4.74481 60.6046 4.7797C60.4766 4.81459 60.3401 4.79722 60.2249 4.73143C60.1098 4.66564 60.0255 4.5568 59.9906 4.42886C59.9558 4.30093 59.9731 4.16437 60.0389 4.04923Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M61.9684 3.52304C62.0342 3.4079 62.1431 3.32362 62.271 3.28873C62.399 3.25384 62.5355 3.2712 62.6506 3.337C62.7658 3.40279 62.8501 3.51163 62.8849 3.63957C62.9198 3.7675 62.9025 3.90406 62.8367 4.01919C62.7709 4.13433 62.662 4.21861 62.5341 4.2535C62.4062 4.28839 62.2696 4.27103 62.1545 4.20523C62.0394 4.13944 61.9551 4.0306 61.9202 3.90266C61.8853 3.77473 61.9027 3.63817 61.9684 3.52304Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M63.898 2.99684C63.9638 2.8817 64.0726 2.79742 64.2006 2.76253C64.3285 2.72764 64.465 2.74501 64.5802 2.8108C64.6953 2.87659 64.7796 2.98543 64.8145 3.11337C64.8494 3.24131 64.832 3.37786 64.7662 3.493C64.7004 3.60813 64.5916 3.69241 64.4637 3.7273C64.3357 3.76219 64.1992 3.74483 64.084 3.67904C63.9689 3.61324 63.8846 3.5044 63.8497 3.37647C63.8148 3.24853 63.8322 3.11197 63.898 2.99684Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M65.8275 2.47064C65.8933 2.35551 66.0022 2.27123 66.1301 2.23634C66.258 2.20145 66.3946 2.21881 66.5097 2.2846C66.6249 2.3504 66.7091 2.45924 66.744 2.58717C66.7789 2.71511 66.7616 2.85166 66.6958 2.9668C66.63 3.08193 66.5211 3.16622 66.3932 3.20111C66.2653 3.23599 66.1287 3.21863 66.0136 3.15284C65.8984 3.08704 65.8141 2.97821 65.7793 2.85027C65.7444 2.72233 65.7617 2.58578 65.8275 2.47064Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M67.7571 1.94445C67.8229 1.82931 67.9317 1.74503 68.0596 1.71014C68.1876 1.67525 68.3241 1.69261 68.4393 1.75841C68.5544 1.8242 68.6387 1.93304 68.6736 2.06097C68.7085 2.18891 68.6911 2.32547 68.6253 2.4406C68.5595 2.55574 68.4507 2.64002 68.3227 2.67491C68.1948 2.7098 68.0582 2.69244 67.9431 2.62664C67.828 2.56085 67.7437 2.45201 67.7088 2.32407C67.6739 2.19614 67.6913 2.05958 67.7571 1.94445Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M69.6866 1.41825C69.7524 1.30311 69.8612 1.21883 69.9892 1.18394C70.1171 1.14905 70.2537 1.16642 70.3688 1.23221C70.4839 1.298 70.5682 1.40684 70.6031 1.53478C70.638 1.66271 70.6206 1.79927 70.5548 1.91441C70.489 2.02954 70.3802 2.11382 70.2523 2.14871C70.1243 2.1836 69.9878 2.16624 69.8726 2.10044C69.7575 2.03465 69.6732 1.92581 69.6383 1.79788C69.6034 1.66994 69.6208 1.53338 69.6866 1.41825Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M71.6161 0.892051C71.6819 0.776916 71.7908 0.692635 71.9187 0.657745C72.0466 0.622856 72.1832 0.640218 72.2983 0.706013C72.4135 0.771807 72.4977 0.880644 72.5326 1.00858C72.5675 1.13652 72.5502 1.27307 72.4844 1.38821C72.4186 1.50334 72.3097 1.58763 72.1818 1.62251C72.0539 1.6574 71.9173 1.64004 71.8022 1.57425C71.687 1.50845 71.6028 1.39962 71.5679 1.27168C71.533 1.14374 71.5503 1.00719 71.6161 0.892051Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M73.5457 0.365854C73.6115 0.250719 73.7203 0.166438 73.8482 0.131548C73.9762 0.0966594 74.1127 0.114021 74.2279 0.179815C74.343 0.24561 74.4273 0.354447 74.4622 0.482384C74.4971 0.61032 74.4797 0.746876 74.4139 0.862011C74.3481 0.977147 74.2393 1.06143 74.1113 1.09632C73.9834 1.13121 73.8468 1.11384 73.7317 1.04805C73.6166 0.982256 73.5323 0.873419 73.4974 0.745482C73.4625 0.617546 73.4799 0.48099 73.5457 0.365854Z"
                fill="white"
              />
            </g>
            <path
              className="color-gradient"
              d="M34.5 20.9998C33.2144 20.9998 31.9577 20.6186 30.8888 19.9044C29.8199 19.1902 28.9868 18.175 28.4948 16.9873C28.0028 15.7996 27.8741 14.4926 28.1249 13.2318C28.3757 11.9709 28.9948 10.8127 29.9038 9.90366C30.8128 8.99461 31.971 8.37555 33.2319 8.12475C34.4928 7.87394 35.7997 8.00266 36.9874 8.49463C38.1752 8.9866 39.1903 9.81972 39.9046 10.8886C40.6188 11.9576 41 13.2143 41 14.4998C40.9982 16.2232 40.3128 17.8755 39.0942 19.094C37.8756 20.3126 36.2234 20.998 34.5 20.9998V20.9998ZM34.5 8.6837C33.3493 8.6837 32.2245 9.02493 31.2678 9.66422C30.3111 10.3035 29.5655 11.2122 29.1252 12.2753C28.6849 13.3384 28.5698 14.5081 28.7944 15.6367C29.019 16.7652 29.5732 17.8018 30.3869 18.6153C31.2006 19.4288 32.2373 19.9828 33.3659 20.2071C34.4945 20.4314 35.6642 20.316 36.7272 19.8755C37.7902 19.435 38.6987 18.6891 39.3377 17.7323C39.9768 16.7754 40.3178 15.6505 40.3175 14.4998C40.3157 12.9576 39.7022 11.4791 38.6115 10.3887C37.5209 9.29834 36.0422 8.68515 34.5 8.6837V8.6837Z"
              fill="url(#paint_linear_gradient_002)"
            />
            <g>
              <path
                className="color-static"
                d="M33.9122 27.9966C31.0118 27.9976 28.1836 27.1187 25.8235 25.4826C23.4634 23.8466 21.6894 21.5355 20.7499 18.8726C19.8103 16.2098 19.7522 13.3285 20.5837 10.632C21.4152 7.93555 23.0946 5.55883 25.387 3.83448C27.8209 1.98902 30.8235 0.991065 33.9122 1.00093C35.7538 0.978283 37.5817 1.31071 39.2898 1.97894C40.998 2.64716 42.5524 3.63788 43.8629 4.89361C45.1734 6.14935 46.2139 7.64511 46.9241 9.29413C47.6343 10.9432 48 12.7126 48 14.4998C48 16.2871 47.6343 18.0565 46.9241 19.7056C46.2139 21.3546 45.1734 22.8503 43.8629 24.1061C42.5524 25.3618 40.998 26.3525 39.2898 27.0208C37.5817 27.689 35.7538 28.0214 33.9122 27.9988V27.9966ZM33.9122 2.08492C31.2448 2.08408 28.6438 2.89258 26.4733 4.39729C24.3028 5.90199 22.6714 8.02759 21.8075 10.4766C20.9435 12.9256 20.8902 15.5755 21.655 18.0553C22.4199 20.5352 23.9645 22.721 26.0729 24.3067C28.3115 26.0023 31.0724 26.9185 33.9122 26.9083C35.6203 26.9521 37.3201 26.6635 38.9113 26.0594C40.5025 25.4554 41.953 24.5482 43.177 23.3913C44.4011 22.2344 45.374 20.8513 46.0383 19.3237C46.7025 17.796 47.0448 16.1547 47.0448 14.4966C47.0448 12.8385 46.7025 11.1972 46.0383 9.66951C45.374 8.14184 44.4011 6.75877 43.177 5.6019C41.953 4.44504 40.5025 3.53782 38.9113 2.93378C37.3201 2.32973 35.6203 2.0411 33.9122 2.08492Z"
                fill="white"
              />
              <path
                className="color-static"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.1076 2.44457C37.4597 1.79991 35.6958 1.47903 33.9184 1.50089L33.9106 1.50099C30.9302 1.49147 28.0346 2.45448 25.6891 4.2329L25.6876 4.23406C23.4779 5.89622 21.8614 8.18531 21.0615 10.7794C20.2617 13.3732 20.3175 16.1445 21.2214 18.7063C22.1253 21.2682 23.833 23.4945 26.1084 25.0717C28.3839 26.6491 31.1124 27.4976 33.912 27.4966L34.3963 27.4964C36.0114 27.4605 37.6076 27.1419 39.1076 26.5551C40.3315 26.0764 41.4729 25.4262 42.4966 24.6277C41.4654 25.42 40.3172 26.0605 39.0887 26.5269C37.4388 27.1532 35.6769 27.4528 33.9067 27.4083C30.9616 27.4173 28.0969 26.4666 25.772 24.706C23.5811 23.0581 21.9736 20.7848 21.1773 18.2027C20.3808 15.6202 20.4363 12.8604 21.3359 10.3103C22.2355 7.76035 23.9331 5.54987 26.1884 3.98638C28.4418 2.42424 31.1399 1.58536 33.9059 1.58492C35.6764 1.54034 37.4386 1.8399 39.0887 2.46632C40.0954 2.84845 41.0481 3.34758 41.9268 3.95128C41.0551 3.34271 40.1089 2.83628 39.1076 2.44457ZM33.9122 2.08492L33.912 2.58492C31.3454 2.58411 28.844 3.36215 26.7582 4.8082C24.6725 6.25412 23.1073 8.29484 22.279 10.6429C21.4507 12.9909 21.3997 15.5307 22.1328 17.908C22.8661 20.2854 24.3478 22.3835 26.3734 23.9071L26.3748 23.9081C28.525 25.5367 31.1789 26.4181 33.9104 26.4083L33.9177 26.4082L33.925 26.4084C35.5684 26.4506 37.2036 26.1729 38.7338 25.592C40.2641 25.0111 41.658 24.139 42.8336 23.0279C44.0092 21.9169 44.9426 20.5894 45.5797 19.1243C46.2168 17.6592 46.5448 16.0858 46.5448 14.4966C46.5448 12.9074 46.2168 11.3339 45.5797 9.86889C44.9426 8.4038 44.0092 7.07634 42.8336 5.96529C41.658 4.85421 40.2641 3.98212 38.7338 3.40123C37.2036 2.82033 35.5684 2.5426 33.925 2.58476L33.9122 2.08492ZM33.4122 28.4883V28.4927L33.9061 28.4987C35.8117 28.5222 37.7036 28.1782 39.472 27.4864C41.2404 26.7946 42.8506 25.7686 44.2088 24.4671C45.5671 23.1656 46.6464 21.6145 47.3833 19.9033C48.1203 18.1921 48.5 16.3554 48.5 14.4998C48.5 12.6443 48.1203 10.8075 47.3833 9.09636C46.6464 7.38521 45.5671 5.8341 44.2088 4.53259C42.8506 3.23112 41.2404 2.20509 39.472 1.5133C37.7048 0.821983 35.8143 0.477999 33.9099 0.500922C30.7146 0.491557 27.6069 1.52413 25.0857 3.43548C22.711 5.22197 20.9689 7.68609 20.1059 10.4847C19.2428 13.2838 19.3031 16.275 20.2784 19.039C21.2535 21.8027 23.0937 24.1988 25.5387 25.8936C27.8474 27.4939 30.5869 28.394 33.4122 28.4883Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M47 9.90939C47 9.06417 47.5313 8.31019 48.3273 8.02591L51.3273 6.95448C52.6298 6.48931 54 7.4549 54 8.83796V19.1619C54 20.545 52.6298 21.5106 51.3273 21.0454L48.3273 19.974C47.5313 19.6897 47 18.9357 47 18.0905V14V9.90939Z"
                fill="white"
              />
            </g>
            <path
              className="color-static"
              d="M34.5 36.4999L44 41.9999L34.5 47.5L34.5 36.4999Z"
              fill="white"
            />
            <path
              className="color-static"
              d="M36.5447 40.1573C35.5512 40.222 34.5307 40.2552 33.5002 40.2552C29.7049 40.2541 26.099 39.8032 23.4756 39.0215C22.1618 38.6299 21.1908 38.184 20.5627 37.7329C20.5627 37.7329 20.0016 37.3857 20 37.0844C20.0003 36.6289 20.5627 36.5844 22 36.0844C23.4936 35.4179 25.3911 34.9067 28 34.5844C30.6002 34.2632 33.2308 33.9204 36 34.0844C38.7725 34.2487 41.5464 34.6422 43.5 35.2243C45.498 35.8197 46.6797 36.446 47.0954 37.0686C47.2826 37.3489 47.309 37.5928 47.232 37.826C47.1484 38.0791 46.9181 38.39 46.4415 38.733C45.8909 39.1293 44.5 40 44.5 40L47.0954 40.8603C47.0954 40.8603 49.4561 39.8023 50.0855 38.8592C50.4922 38.2499 50.6103 37.5879 50.3923 36.9282C50.1809 36.2885 49.6766 35.7193 48.9887 35.2243C47.6245 34.2427 45.4066 33.4574 42.6921 32.9169C39.9572 32.3722 36.7592 32.0844 33.4997 32.0844C29.1367 32.0858 24.9206 32.6018 21.775 33.5393C20.2043 34.0075 18.9217 34.5742 18.0162 35.2248C17.1156 35.8719 16.5032 36.668 16.5 37.5824L16.5 37.5844C16.5 38.9428 17.8226 40.0453 19.6497 40.8603C21.537 41.7021 24.1644 42.3373 27.1783 42.7094C30.1459 43.0758 33.3987 43.176 36.5447 43V40.1573Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint_linear_gradient_002"
              x1="7.94602"
              y1="46.9321"
              x2="60.0484"
              y2="46.9321"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11e8bb" />
              <stop offset="1" stopColor="#8200c9" />
            </linearGradient>
          </defs>
        </svg>
      </a>

      <a
        onClick={() => handleChangeDrawingMode("point")}
        className="three-tools"
        title="Rotate Orbit"
      >
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="ico_rotate" className="group-elevated">
            <g id="Vector">
              <path
                className="color-static"
                d="M39.6962 0L49.1051 3.09411L51 7.3157L49.9979 32.8934L48.8257 36.359L39.7907 43L31.4171 41.4158L20.5467 37.2526L15.8103 31.5872L14.2927 8.81361L17.5058 3.39502L28.9846 0.958406L39.6962 0ZM27.6443 2.73238L18.4627 4.68138L16.4652 8.05005L25.3292 6.78666L27.6443 2.73238ZM25.0913 8.29155L15.8364 9.61066L17.2441 30.7358L26.1628 33.0218L25.0913 8.29155ZM26.49 34.6104L18.5604 32.5779L21.4513 36.0359L29.6616 39.1804L26.49 34.6104ZM32.0675 40.0563L39.4251 41.4483L47.5601 35.4689L48.5197 32.6317L49.5007 7.59456L48.0079 4.2689L39.5196 1.47751L29.5557 2.36901L26.5513 7.63025L27.6825 33.7379L32.0675 40.0563Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M37.0913 23.3769V14.1525H34.247V23.5804L37.0913 23.3769Z"
                fill="white"
              />
              <path
                className="color-static"
                d="M45.212 14.1525H42.7469V22.9128L45.212 22.6767V14.1525Z"
                fill="white"
              />
            </g>
            <path
              className="color-gradient"
              d="M10.5 29.3772C2.55998 31.8723 0 35.5108 0 40.1222V45.4947C0 48.9987 2.97566 52.0945 7.61356 54.4259C12.0684 56.6653 18.1575 58.2401 25.0714 58.92V65L26.6565 63.6899L36.5988 55.4722L25.0714 45.9444V51.9975C18.4655 51.325 12.6802 49.8037 8.5784 47.7418C5.47536 46.1819 3.36895 44.3642 2.4248 42.4337C3.8489 39.5027 5.41744 37.3278 11 35.5376V33.8886C11 33.8886 4.5 36 1.85896 40.0907C1.5 33.5 10 30.7139 10.5 31.0365V29.3772ZM54.2843 30.7546C60.9026 33.0018 63.1172 36.3521 63.141 40.0907C61.0252 37.5339 59.2004 35.3513 54.2843 33.7578V35.4194C59.4579 37.1911 61.212 39.6365 62.5716 42.4247C60.5334 46.6506 53.0131 50.2337 42.5583 51.7112L41.7857 51.8206V58.7506L42.8703 58.5962C56.107 56.7265 65 51.4613 65 45.4947V40.1222C65 35.5108 62.94 31.4951 55 29L54.2843 30.7546ZM1.85714 44.7032C3.18563 46.331 5.13544 47.8077 7.61356 49.0534C12.2515 51.3848 18.6345 53.0223 25.9039 53.6509L26.9286 53.7393V49.65L33.9727 55.4722L26.9286 61.2944V57.5693L26.0961 57.4974C19.0488 56.888 12.897 55.2852 8.5784 53.1143C4.25977 50.9433 1.85714 48.275 1.85714 45.4947V44.7032ZM63.1429 44.7512V45.4947C63.1429 50.5326 55.354 55.0683 43.6429 56.9218V53.1113C52.9221 51.6891 59.9662 48.5803 63.1429 44.7512Z"
              fill="url(#paint_linear_gradient_000)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint_linear_gradient_000"
              x1="7.22093"
              y1="46.9976"
              x2="56.7282"
              y2="46.9976"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11e8bb" />
              <stop offset="1" stopColor="#8200c9" />
            </linearGradient>
          </defs>
        </svg>
      </a>
    </div>
  );
};

export default Toolbox;