import React, { Component } from 'react'

import bhd from "../../Assets/img/bhd.png";
import galaxy from "../../Assets/img/galaxycine.png";
import cinestar from "../../Assets/img/cinestar.png";
import lotte from "../../Assets/img/lotte.png";
import mega from "../../Assets/img/megags.png";
import beta from "../../Assets/img/bt.jpg";
import ddc from "../../Assets/img/dongdacinema.png";
import touchcinema from "../../Assets/img/TOUCH.png";
import cinemax from "../../Assets/img/cnx.jpg";
import starlight from "../../Assets/img/STARLIGHT.png";
import momo from "../../Assets/img/momo.png";
import zalo from "../../Assets/img/zalopay_icon.png";
import payoo from "../../Assets/img/payoo.jpg";
import vcb from "../../Assets/img/VCB.png";
import agri from "../../Assets/img/AGRIBANK.png";
import vietinbank from "../../Assets/img/VIETTINBANK.png";
import ivb from "../../Assets/img/IVB.png";
import go from "../../Assets/img/123go.png";
import laban from "../../Assets/img/laban.png";
import apple_logo from "../../Assets/img/apple-logo.png";
import android_logo from "../../Assets/img/android-logo.png";
import facebook_logo from "../../Assets/img/facebook-logo.png";
import zalo_logo from "../../Assets/img/zalo-logo.png";
import zion from "../../Assets/img/zion-logo.jpg";
import dathongbao from "../../Assets/img/dathongbao.png";

import './style.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_container container">
                    <div className="row container">
                        <div className="col-sm-4 col-xs-12 mt-3">
                            <p className="title">123PHIM</p>
                            <div className="row">
                                <div className="col-sm-6 col-xs-6 pr-0">
                                    <a className="rule" href="/" >FAQ</a>
                                    <a className="rule" href="/">Brand Guidelines</a>
                                </div>
                                <div className="col-sm-6 col-xs-6 pl-0">
                                    <a className="rule" href="/">Thoả thuận sử dụng</a>
                                    <a className="rule" href="/">Quy chế hoạt động</a>
                                    <a className="rule" href="/">Chính sách bảo mật</a>
                                    <a className="rule" href="/">Quyền lợi thành viên</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xs-12 mt-3">
                            <p className="title">ĐỐI TÁC</p>
                            <div className="col-sm-12 col-xs-12 px-0 mb-3">
                                <a target="_blank" rel="noopener noreferrer" href="http://bhdstar.vn" className="mr-4">
                                    <img className="iconPartner" src={bhd} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.galaxycine.vn/" className="mr-4">
                                    <img className="iconPartner" src={galaxy} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://cinestar.com.vn/" className="mr-4">
                                    <img className="iconPartner" src={cinestar} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://lottecinemavn.com/LCHS/index.aspx" className="mr-4">
                                    <img className="iconPartner" src={lotte} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.megagscinemas.vn/" className="mr-4">
                                    <img className="iconPartner" src={mega} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-12 col-xs-12 px-0 mb-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.betacineplex.vn/home.htm" className="mr-4">
                                    <img className="iconPartner" src={beta} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://ddcinema.vn/" className="mr-4">
                                    <img className="iconPartner" src={ddc} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://touchcinema.com/" className="mr-4">
                                    <img className="iconPartner" src={touchcinema} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://cinemaxvn.com/" className="mr-4">
                                    <img className="iconPartner" src={cinemax} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://starlight.vn/" className="mr-4">
                                    <img className="iconPartner" src={starlight} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-12 col-xs-12 px-0 mb-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://momo.vn/" className="mr-4">
                                    <img className="iconPartner" src={momo} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://zalopay.vn/" className="mr-4">
                                    <img className="iconPartner" src={zalo} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.payoo.vn/" className="mr-4">
                                    <img className="iconPartner" src={payoo} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.vietcombank.com.vn/" className="mr-4">
                                    <img className="iconPartner" src={vcb} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.agribank.com.vn/" className="mr-4">
                                    <img className="iconPartner" src={agri} alt="" />
                                </a>
                            </div>
                            <div className="col-sm-12 col-xs-12 px-0 mb-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.vietinbank.vn/web/home/vn/index.html" className="mr-4">
                                    <img className="iconPartner" src={vietinbank} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.indovinabank.com.vn/" className="mr-4">
                                    <img className="iconPartner" src={ivb} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://123go.vn/" className="mr-4">
                                    <img className="iconPartner" src={go} alt="" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://laban.vn/" className="mr-4">
                                    <img className="iconPartner" src={laban} alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-4 col-xs-12 mt-3">
                            <div className="row justify-content-around">
                                <div className="col-xs-6 mr-4 text-center">
                                    <p className="title">MOBILE APP</p>
                                    <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/vn/app/123phim-gioi-phim-tren-au/id615186197" className="mr-2">
                                        <img className="iconPartner" src={apple_logo} alt="" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                                        <img className="iconPartner" src={android_logo} alt="" />
                                    </a>
                                </div>

                                <div className="col-xs-6 ml-4 text-center">
                                    <p className="title">SOCIAL</p>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/123phim/" className="mr-2">
                                        <img className="iconPartner" src={facebook_logo} alt="" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://zalo.me/123phim">
                                        <img className="iconPartner" src={zalo_logo} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="line mt-4 mb-3"></div>

                    <div className="row">
                        <div className="col-sm-1 col-xs-12">
                            <img className="zionImg" src={zion} alt="" />
                        </div>

                        <div className="col-sm-9 col-xs-12">
                            <p className="pProductOf">123PHIM – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                            <p className="pAddressAndTax">Địa chỉ: 52 Nguyễn Ngọc Lộc, Phường 14, Quận 10, Thành phố Hồ Chí Minh</p>
                            <p className="pAddressAndTax mb-4">Mã số thuế: 0101659783</p>
                        </div>

                        <div className="col-sm-2 col-xs-12 text-right">
                            <a target="_blank" rel="noopener noreferrer" href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=55561" title="Bộ Công Thương">
                                <img className="boCongThuong" src={dathongbao} alt="Bộ Công Thương" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
