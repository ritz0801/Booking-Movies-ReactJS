import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { sendTypeVsQuantity, reset } from "../../Actions/BuyTicket";
import { nextStep } from "../../Actions/Stepper";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Skeleton from "react-loading-skeleton";

let renderCount = 0;

const ContentStepOneCheckout = ({ film }) => {
  const [ticket, setTicket] = useState(0);
  const [ticketVip, setTicketVip] = useState(0);
  const [isLoading, setIsLoading] = useState(renderCount === 0 ? true : false);

  const totalMoney = ticket * 75000 + ticketVip * 90000;
  const dispatch = useDispatch();
  const refs = useRef(false);
  useEffect(() => {
    dispatch(reset());
    if (!_.isEmpty(film) && renderCount === 0) {
      let delay = _.debounce(() => setIsLoading(false), 500);
      delay();
      renderCount++;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [film]);
  const plusTicket = type => {
    if (type === "VIP") {
      setTicketVip(ticketVip + 1);
    } else {
      setTicket(ticket + 1);
    }
    effect();
  };

  const minusTicket = type => {
    if (type === "VIP") {
      setTicketVip(ticketVip === 0 ? 0 : ticketVip - 1);
    } else {
      setTicket(ticket === 0 ? 0 : ticket - 1);
    }
    effect();
  };

  const effect = async () => {
    for (let font = parseInt(refs.current.style.fontSize); font <= 34; font++) {
      await new Promise(resolve => {
        const debounce = _.debounce(
          () => resolve((refs.current.style.fontSize = font + "px")),
          10
        );
        debounce();
      });
    }
    for (let font = 34; font >= 24; font--) {
      await new Promise(resolve => {
        const debounce = _.debounce(
          () => resolve((refs.current.style.fontSize = font + "px")),
          10
        );
        debounce();
      });
    }
  };
  const doneChooseTypeVsQuantity = () => {
    const infoQuantity = {
      quantity: { ticket, ticketVip }
    };
    dispatch(sendTypeVsQuantity(infoQuantity));
    dispatch(nextStep());
  };
  return (
    <div className="step-1">
      <div className="info-showtimes">
        {/* <img src={film && film.logoCinema} alt="..." /> */}
        <div
          className="logo-cinema"
          style={{ backgroundImage: film && `url(${film.logoCinema})` }}
        >
          {isLoading && (
            <div className="loading">
              <Skeleton circle={true} width="100%" height="100%" />
            </div>
          )}
        </div>
        <div>
          <p>
            {isLoading ? <Skeleton width="100px" /> : film && film.tenCumRap}
          </p>
          <span>
            {isLoading ? (
              <Skeleton width="100px" />
            ) : (
              film && `${film.ngayChieu} - ${film.gioChieu} - ${film.tenRap}`
            )}
          </span>
        </div>
      </div>
      <div className="choose-type-ticket">
        <div className="ticket">
          <span className="type-ticket">VÉ THƯỜNG</span>
          <span className="price-ticket">75.000 đ</span>
          <div className="quantity">
            <RemoveIcon
              className="minus"
              onClick={() => {
                minusTicket("");
              }}
            />
            <input type="number" min="0" value={ticket} readOnly />
            <AddIcon className="plus" onClick={() => plusTicket("")} />
          </div>
        </div>
        <div className="ticket">
          <span className="type-ticket">VÉ VIP</span>
          <span className="price-ticket">90.000 đ</span>
          <div className="quantity">
            <RemoveIcon className="minus" onClick={() => minusTicket("VIP")} />
            <input type="number" min="0" value={ticketVip} readOnly />
            <AddIcon className="plus" onClick={() => plusTicket("VIP")} />
          </div>
        </div>
      </div>
      <div className="wrap-choose-ticket">
        <div className="choose-ticket">
          <div className="total-money">
            <p>Tổng tiền: </p>
            <span
              ref={span => (refs.current = span)}
              style={{ fontSize: 24 }}
            >{`${totalMoney
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`}</span>
          </div>
          <button
            onClick={doneChooseTypeVsQuantity}
            disabled={(ticketVip === 0) & (ticket === 0)}
          >
            CHỌN GHẾ
          </button>
        </div>
        <p className="note">
          Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã mua.
        </p>
        <div className="hotline">
          <div className="title">
            <p>HOTLINE</p>
            <span>Phí cuộc gọi 1000VND/phút</span>
          </div>
          <p className="phone">1900 545 436</p>
        </div>
      </div>
    </div>
  );
};

export default ContentStepOneCheckout;
