import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Circle,
  ClipboardCheck,
  ArrowLeft,
  CheckCircle2,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Info,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  Menu,
  MinusCircle,
  MoreVertical,
  Heart,
  Pizza,
  Plus,
  Minus,
  Instagram,
  Facebook,
  Settings,
  ShoppingCart,
  SunMedium,
  Trash,
  Trash2,
  Twitter,
  User,
  X,
  Command,
} from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      width="180"
      height="153"
      viewBox="0 0 180 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_i_401_17)">
        <path
          d="M90.5 0L179 153H2L90.5 0Z"
          fill="#904DFF"
          fill-opacity="0.07"
        />
      </g>
      <path
        d="M2.86684 152.5L90.5 0.998595L178.133 152.5H2.86684Z"
        stroke="url(#paint0_linear_401_17)"
      />
      <path d="M90.5 49L139 133H42L90.5 49Z" fill="#8B5CF6" />
      <g filter="url(#filter1_i_401_17)">
        <path
          d="M90.5 0L179 153H2L90.5 0Z"
          fill="#904DFF"
          fill-opacity="0.07"
        />
      </g>
      <path
        d="M2.86684 152.5L90.5 0.998595L178.133 152.5H2.86684Z"
        stroke="url(#paint1_linear_401_17)"
      />
      <defs>
        <filter
          id="filter0_i_401_17"
          x="2"
          y="0"
          width="177"
          height="153"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.564706 0 0 0 0 0.301961 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_401_17"
          />
        </filter>
        <filter
          id="filter1_i_401_17"
          x="2"
          y="0"
          width="177"
          height="153"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.564706 0 0 0 0 0.301961 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_401_17"
          />
        </filter>
        <linearGradient
          id="paint0_linear_401_17"
          x1="90.5"
          y1="0"
          x2="90.5"
          y2="153"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#904DFF" stop-opacity="0.1" />
          <stop offset="1" stop-opacity="0" />
          <stop offset="1" stop-color="#904DFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_401_17"
          x1="90.5"
          y1="0"
          x2="90.5"
          y2="153"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#904DFF" stop-opacity="0.1" />
          <stop offset="1" stop-opacity="0" />
          <stop offset="1" stop-color="#904DFF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: (props: LucideProps) => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.117 7.752a.75.75 0 0 1 .798.698l.46 6.9c.09 1.347.154 2.285.294 2.99.137.685.327 1.047.6 1.303.274.256.648.422 1.34.512.714.093 1.654.095 3.004.095h.774c1.35 0 2.29-.002 3.004-.095.692-.09 1.066-.256 1.34-.512.273-.256.463-.618.6-1.302.14-.706.204-1.644.294-2.992l.46-6.899a.75.75 0 1 1 1.497.1l-.464 6.952c-.085 1.282-.154 2.319-.316 3.132-.169.845-.455 1.551-1.047 2.104-.591.554-1.315.793-2.17.904-.822.108-1.86.108-3.146.108h-.878c-1.286 0-2.324 0-3.146-.108-.855-.111-1.579-.35-2.17-.904-.592-.553-.878-1.26-1.047-2.104-.162-.814-.23-1.85-.316-3.132L4.418 8.55a.75.75 0 0 1 .699-.798Zm5.238-5.502h-.046c-.216 0-.405 0-.583.028a2.25 2.25 0 0 0-1.64 1.183c-.084.16-.143.339-.211.544l-.015.044-.097.29a1.25 1.25 0 0 1-1.263.91h-3a.75.75 0 1 0 0 1.501h17.001a.75.75 0 0 0 0-1.5H17.41a1.25 1.25 0 0 1-1.173-.91l-.097-.291-.014-.044c-.069-.205-.128-.384-.211-.544a2.25 2.25 0 0 0-1.641-1.183 3.733 3.733 0 0 0-.583-.028h-3.336Zm-1.21 2.685c-.04.109-.085.214-.137.315h5.984a2.764 2.764 0 0 1-.136-.314l-.04-.114-.099-.3a3.114 3.114 0 0 0-.133-.368.75.75 0 0 0-.547-.395 3.114 3.114 0 0 0-.392-.009h-3.29c-.288 0-.348.002-.392.01a.75.75 0 0 0-.547.394c-.02.04-.042.095-.133.369l-.1.3-.038.112Z"
        fill={"currentColor"}
      />
    </svg>
  ),
  post: FileText,
  page: File,
  media: Image,
  instagram: Instagram,
  facebook: Facebook,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  help: HelpCircle,
  menu: (props: LucideProps) => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Z"
        fill="#1C1917"
      />
    </svg>
  ),
  minusCircle: MinusCircle,
  minus: Minus,
  plus: Plus,
  pizza: Pizza,
  twitter: Twitter,
  x: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  ),
  heart: (props: LucideProps) => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343 1.063 1.196 2.349 2.188 3.603 3.154.298.23.594.459.885.688.526.415.995.778 1.448 1.043.452.264.816.385 1.126.385.31 0 .674-.12 1.126-.385.453-.265.922-.628 1.448-1.043.29-.23.587-.458.885-.688 1.254-.966 2.54-1.958 3.603-3.154 1.289-1.452 2.188-3.146 2.188-5.343 0-2.15-1.215-3.955-2.874-4.713-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424ZM12 4.46C9.688 2.39 7.099 2.1 5 3.059 2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339 1.166 1.313 2.593 2.412 3.854 3.382.286.22.563.434.826.642.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16a78.6 78.6 0 0 1 .826-.642c1.26-.97 2.688-2.07 3.854-3.382 1.457-1.64 2.567-3.674 2.567-6.339 0-2.712-1.535-5.064-3.75-6.077-2.099-.96-4.688-.67-7 1.399Z"
        fill="#1C1917"
      />
    </svg>
  ),
  check: Check,
  copy: Copy,
  info: Info,
  checkCircle: CheckCircle2,
  copyDone: ClipboardCheck,
  sun: SunMedium,
  shoppingCart: (props: LucideProps) => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.418 3.25c.28-.59.883-1 1.582-1h4c.698 0 1.301.41 1.582 1 .683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.493.539 1.127.776 1.998l.037.136.59 2.167a2.98 2.98 0 0 1 1.01.828c.622.797.732 1.746.622 2.834-.108 1.056-.44 2.386-.856 4.051l-.027.105c-.263 1.053-.477 1.908-.73 2.575-.266.696-.602 1.266-1.157 1.699-.554.433-1.189.62-1.928.71-.709.084-1.59.084-2.675.084H9.638c-1.085 0-1.967 0-2.675-.085-.74-.088-1.374-.276-1.929-.71-.554-.432-.89-1.002-1.156-1.698-.254-.667-.467-1.522-.73-2.575l-.027-.105c-.416-1.665-.749-2.995-.856-4.05-.11-1.09 0-2.038.621-2.835.283-.362.622-.63 1.01-.828l.59-2.167.038-.136c.237-.871.409-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222Zm.001 1.502c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.176.237-.28.568-.57 1.635L5.58 8.389c1.038-.139 2.378-.139 4.042-.139h4.755c1.665 0 3.005 0 4.042.139l-.353-1.297c-.291-1.067-.394-1.398-.57-1.635a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998ZM10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 0 0 0-.5h-4ZM5.7 9.886c-.91.132-1.351.372-1.63.73-.28.357-.405.842-.312 1.758.095.936.4 2.16.834 3.9.278 1.108.47 1.876.69 2.45.21.554.417.847.677 1.05.259.202.593.331 1.183.402.61.073 1.4.074 2.544.074h4.63c1.143 0 1.935-.001 2.544-.074.59-.07.924-.2 1.183-.402.26-.203.466-.496.678-1.05.218-.574.411-1.342.688-2.45.435-1.74.74-2.964.834-3.9.094-.916-.032-1.402-.311-1.759s-.72-.597-1.631-.729c-.93-.134-2.192-.136-3.985-.136h-4.63c-1.793 0-3.055.002-3.985.136Z"
        fill="#1C1917"
      />
    </svg>
  ),
  moon: Moon,
  trash2: Trash2,
  laptop: Laptop,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: LucideProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  npm: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
    </svg>
  ),
  yarn: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z" />
    </svg>
  ),
  pnpm: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z" />
    </svg>
  ),
  react: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
  tailwind: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  whatsapp: (props: LucideProps) => (
    <svg
      width={800}
      height={800}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 31c7.732 0 14-6.268 14-14S23.732 3 16 3 2 9.268 2 17c0 2.51.661 4.867 1.818 6.905L2 31l7.315-1.696A13.938 13.938 0 0 0 16 31Zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 5.154 4.154 10.458 4.154 17c0 2.526.79 4.867 2.138 6.79L5.23 27.77l4.049-1.013a11.791 11.791 0 0 0 6.72 2.09Z"
        fill="#BFC8D0"
      />
      <path
        d="M28 16c0 6.627-5.373 12-12 12-2.528 0-4.873-.782-6.807-2.116L5.09 26.909l1.075-4.03A11.945 11.945 0 0 1 4 16C4 9.373 9.373 4 16 4s12 5.373 12 12Z"
        fill="url(#paint0_linear_87_7264)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16c0 2.51.661 4.867 1.818 6.905L2 30l7.315-1.696A13.938 13.938 0 0 0 16 30Zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 4.154 4.154 9.458 4.154 16c0 2.526.79 4.867 2.138 6.79L5.23 26.77l4.049-1.013a11.791 11.791 0 0 0 6.72 2.09Z"
        fill="#fff"
      />
      <path
        d="M12.5 9.5c-.333-.669-.844-.61-1.36-.61-.921 0-2.359 1.105-2.359 3.16 0 1.684.742 3.528 3.243 6.286 2.414 2.662 5.585 4.039 8.218 3.992 2.633-.047 3.175-2.313 3.175-3.078 0-.339-.21-.508-.356-.554-.897-.43-2.552-1.233-2.928-1.384-.377-.15-.573.054-.695.165-.342.325-1.019 1.284-1.25 1.5-.232.215-.578.106-.721.024-.53-.212-1.964-.85-3.107-1.958-1.415-1.371-1.498-1.843-1.764-2.263-.213-.336-.057-.542.021-.632.305-.351.726-.894.914-1.164.189-.27.04-.679-.05-.934-.387-1.097-.715-2.015-.981-2.55Z"
        fill="#fff"
      />
    </svg>
  ),
  gmail: (props: LucideProps) => (
    <svg
      width={800}
      height={800}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m22.052 8.523-5.988 4.672L9.94 8.523v.001l.008.007v6.542l6.047 4.774 6.057-4.59V8.524Z"
        fill="#fff"
      />
      <path
        d="m23.623 7.386-1.572 1.137v6.735l4.947-3.799V9.171s-.6-3.268-3.375-1.785Z"
        fill="#fff"
      />
      <path
        d="M22.05 15.258v8.734h3.793s1.079-.11 1.157-1.34V11.458l-4.95 3.799ZM9.948 24v-8.927l-.008-.006L9.948 24ZM9.94 8.524l-1.564-1.13C5.602 5.91 5 9.177 5 9.177v2.288l4.94 3.602V8.524Z"
        fill="#fff"
      />
      <path
        d="M9.94 8.524v6.543l.008.006V8.531l-.008-.007ZM5 11.467v11.192A1.35 1.35 0 0 0 6.157 24h3.792l-.009-8.933-4.94-3.6Z"
        fill="#fff"
      />
    </svg>
  ),
  emptyCart: (props: LucideProps) => (
    <svg
      width={321}
      height={355}
      viewBox="0 0 321 355"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <g className="bounce">
          <path
            opacity={0.1}
            d="M97.12 269.3 83.6 183.72h172.17l3.17-20.09H61.42l16.7 105.67c0 6.6 5.4 12 12 12h19c-6.6 0-12-5.4-12-12Z"
            fill="#000"
          />
          <path
            d="M230.26 281.3H90.12c-6.6 0-12-5.4-12-12l-17-107.63c0-6.6 5.4-12 12-12h174.14c6.6 0 12 5.4 12 12l-17 107.63c0 6.6-5.4 12-12 12Z"
            fill="#9CA3AF"
          />
          <path
            d="M271.37 163.63H48.44c-6.6 0-12-5.4-12-12v-15.19c0-6.6 5.4-11 12-11h222.93c6.6 0 12 4.4 12 11v15.19c0 6.6-5.4 12-12 12Z"
            fill="#9CA3AF"
          />
          <path
            d="m283.2 232.23-1.51 1.51c-2.93 2.93-7.73 2.93-10.66 0l-83.55-83.55c-2.93-2.93-2.93-7.73 0-10.66l1.51-1.51c2.93-2.93 7.73-2.93 10.66 0l83.55 83.55c2.93 2.93 2.93 7.73 0 10.66Zm-245.28 1.51-1.51-1.51c-2.93-2.93-2.93-7.73 0-10.66l83.55-83.55c2.93-2.93 7.73-2.93 10.66 0l1.51 1.51c2.93 2.93 2.93 7.73 0 10.66l-83.55 83.55c-2.94 2.93-7.73 2.93-10.66 0Z"
            fill="#1C1917"
          />
          <path
            opacity={0.1}
            d="M56.84 125.44h-8.4c-6.6 0-12 4.4-12 11v15.19c0 6.6 5.4 12 12 12h8.4c-10.42-19.09 0-38.19 0-38.19Z"
            fill="#000"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h320.37v354.98H0z" />
        </clipPath>
        <filter
          id="b"
          x={65.49}
          y={323.72}
          width={189.4}
          height={30.6}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={2}
            result="effect1_foregroundBlur_4_2"
          />
        </filter>
      </defs>
    </svg>
  ),
  emptyBox: (props: LucideProps) => (
    <svg
      width={321}
      height={355}
      viewBox="0 0 321 355"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <g className="bounce">
          <path
            d="M159.943 116.054v128.582L75.89 258.521l-6.46 1.063V145.952l48.141-15.897 41.844-13.811.528-.19Zm90.512 29.898v113.632l-90.512-14.948V116.054l.528.19 89.984 29.708Z"
            fill="#1C1917"
          />
          <path
            d="M159.943 176.721v113.633l-77.31-25.534-13.202-4.364V146.825l11.7 3.87 10.603 3.49 20.434 6.754 44.647 14.758 2.315.721.447.152.366.151Zm90.506-29.906-90.501 29.9v113.63l90.501-29.9v-113.63Zm38.437-53.297-3.616 5.122-33.718 47.881-1.097-.341-90.512-29.177.528-.759L197.277 64l77.715 25.041 13.894 4.477Zm-128.943 23.485-43.347 13.962-47.165 15.215-1.097.341L31 93.518 122.609 64l26.081 36.992 10.725 15.252.528.759Z"
            fill="#9CA3AF"
          />
          <path
            opacity={0.1}
            d="m170.911 178.353-4.672 6.64-6.256 8.953-.041.038-33.677 48.147-56.834-18.287V211.93l-27.95-8.991 3.737-5.312 24.213-34.412 2.559-3.605 11.578 2.201 73.247 13.886 3.006.57h.162l.162.037.691.114 10.075 1.935Z"
            fill="#0C1531"
          />
          <path
            opacity={0.1}
            d="m149.034 178.35 10.947 15.634 33.697 48.137 56.802-18.294v-11.881l27.978-9.011-27.978-39.736-2.525-3.587-84.86 16.079-2.977.557-.137.03-10.947 2.072Z"
            fill="#0C1531"
          />
          <path
            d="m159.943 176.038-.122.229-.041.037-.203.266-5.931 8.423-31.037 44.086-53.178-17.149-27.95-8.991-1.462-.456L31 199.561l37.334-53.002 1.097.342 11.7 3.794 10.684 3.414 68.128 21.929Zm37.339 53.023 91.603-29.496-37.333-53.011-91.604 29.497 37.334 53.01Z"
            fill="#9CA3AF"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h320.37v354.98H0z" />
        </clipPath>
        <filter
          id="b"
          x={65.49}
          y={323.72}
          width={189.4}
          height={30.6}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={2}
            result="effect1_foregroundBlur_8_2"
          />
        </filter>
      </defs>
    </svg>
  ),
  phone: (props: LucideProps) => (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 2s2.2.2 5 3 3 5 3 5m-7.793-4.464s.99.282 2.475 1.767c1.485 1.485 1.768 2.475 1.768 2.475m-8.412-4.462.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z"
        stroke="#1C1917"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  ),
};
