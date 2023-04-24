import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <>
      <div>
        {/* if the message for id does not exist, default message will be displayed instead */}
        <FormattedMessage id="hello_" defaultMessage="타조" />
      </div>
      <div>
        <FormattedMessage id="MESSAGE_LOADING" defaultMessage="로또" />
      </div>
    </>
  );
}
