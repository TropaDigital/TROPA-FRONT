import React from 'react';
import { IconAstronautFull, IconEvelopeFull } from '../Svg';
import { WPPButton } from '../WPPButton/WPPButton';

import { ContainerCenter, FooterContainer } from './styles';
import { IconWhatsapp, IconPhone } from '../Svg/index';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <WPPButton />
            <ContainerCenter>
                <div className="infos">
                    <div className="item-group">
                        <div className="item">
                            <IconEvelopeFull />
                            <span>contato@tropa.digital</span>
                        </div>
                        <div className="item">
                            <IconWhatsapp />
                            <span>(11) 97867-5858</span>
                        </div>
                        <div className="item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="none"
                                />
                                <path
                                    fill="currentColor"
                                    d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"
                                />
                            </svg>
                            <span>(11) 4229-9094</span>
                        </div>
                    </div>
                </div>
                <div className="infos">
                    <div className="item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAApCAYAAABUdSs8AAAC1klEQVRYhb2XW4hNYRTHf/YMxeRaHuR+GYUHGaGkTDx4Qg2RYpp5kKYkRUlhlDQpkRIeJJEochkeJGJEuTy4TE1eZExRDJ4cygxHq9anbXf23uvbZ5/516l99rf2+v/3Xt+6fINuNS/BiDHAamApUAdMAkbqo9+BHuAl0AFcBz5b3FoELAB2KXm1UewfFXEIeJZkGCSsjQXOq4M1HuTObwPwFDinX89LwCLgBbDRgzQOmzQ0860ClgP3gfE5kDtMBB4Cy9IELARuAkNzJHcYBrQDc+MESJyuVojcoQa4AYwoJeBwzp89DpOBtqiAeUDzAJA7bAFmyLVLrR2eDvq14HQBRWA2UO+RqlXAHqCpWuPR4EF+CdgJfIjcl/AdAdYZ/awFtkoIVnlsvIPAhhLk6L31Wv0skA25QgQsNj5wF9hrsNut4bGgPtDct2CfxjsNRbW1oE4ETDAYSmd7YnQqeAR8M9hNDZIaRQjvjG/vIN3wrcFunAgYbDCs8SB3GG4xClRtGmaGy6cBo1yhSUGfCPhoMBzi2ZobjUWpVwS8MTrdr2NYGqaorQVdQdrIFIJMSLeBaQk2tcAdYLTR5/NAnVoxC3itFXGO1vQqvW7TyafWw1+7DKUiolunFl+4DZw0W8ZBUnu6y4ITGRw44izkgqNSW9zDx4FPGR1lgZwhTrs3QA8WvjNBOdgO/AwLEFwALg4A+VngmvsTjd9m3eWVQqcMIWHfUQEFPYJZOpkvvurwU0gSgKakjFW/cyTv1xGsO7oQl0L3ct6U24AHpRaScvgYcCYH8lPAybjFtCLSAjwug7xD3z4WaQJ+6dG8JwP5e417XzkC0AopmfHDg7ygO/5LmqG1jkuXa/IQ0GitJz6N5DJwwGDXqqdsE3w7WWu4jJbAFaPIf/AVUNTP21li7ZWGyWd8z9TLpXPKBpPS6tCrG/W/MlspAQIpqXKiFmL5rdS08wPwF55Rhh5fL1jvAAAAAElFTkSuQmCC" />
                        <span>
                            Av Roberto Simonsen, 743
                            <br />
                            Santo Antônio - São Caetano do sul
                        </span>
                    </div>
                    <div className="item">
                        <span>Nossas redes</span>
                        <a
                            href="https://www.instagram.com/tropadigitalagencia/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADXUlEQVRYhcWYW0hVURCGP3cnSSoUoZfCwoyCyC4YkXaBoujBXrpR2Y0IIgiCHoNeg56CoHqJIgQrSjNK6SWQDDoF+hBYZBBJdiEC81KZp6wYmVPLcbf3Pvt4+eGwz6y9Zq1/rzUza9bkNBxcjUEOsBKoBJYDRUAhkKe/XKsQASmgX39dQCfQCjQCSeC3O4QltQq4ACyOMXFctAFHgea0vucMtEdfjCchwSKgSecfRmotUG1IjiV6dds+OzyqlceQIDZ0fhwJ3VM7rQBmATUOsXPCR/6U6xKOBwaBA7pSqOEfduRS4eOpl2WL70CPPoPwEfhk3n8DOhy5UkiVxSAkk18FdugWSKgo0GeRtl8Hfhi9mUCJaZsBzHfkMk8HyQSXgLnqLbXAe6P7Vtt3A8VqwC7qgAUqz1F5ivO+KKGBMQr6gL3AnQw+4J3a0G01aFnJJcALoBvIV0dzUehpxzAIoY0hhPID3tUD69Sw0yjwISTIi0pKVuiJVQaOa/uAfvmAxp9jZkvQfvsjzDVEKuwsu+yzQnImtgNngBXOGLl6bp4FngPLjF6tOkgQcsMCpnz5SR9CzREcRIz8IbDUtJ/w8cphCCN1C/jgyHnqLVG2XDBV+7u78Qa4my0pF0eA2REJpSHh45Bpq8+G1GMj78yQUBq7jJyMSyqlgdCFNdyosHodQXpBpPqNPD1m1pnWTTiyHMxf4pCyxtyn3hgHovvT0ZsETItDKtfH7VtjkmoxcnFQ5zBDrzDytXicRuiVB3UOI7XVyBeB1xkSksh/xbRty4bUFhOXBrTtv0Zq0KsE3AgucWtzNqQmA6dM21NA7mWvQnTbdfufmfbTauiBpFIhg0uGsN2H2EKN8A/Uu9CUuEnz7lIfQlWalQYhJZfR7pBcSCAxawPwKKBPwri9xXqgIcK52eP5BEk/yED3GbliLoIIVUUkJOj39G4fBTLgTU1rox7KYtQ3nFQ4Cro8LTZkgio18jq1txLHcOU5D9inefnLCDZk0ZnQKL0pQ8WExjA3jn3V/ClbtHhajhkNjAYhQaOnuU3bKA2YLeRykfS0YCX1oV8TTGhQb0d/I3qzXn8mili68JHEHDM1emEc762ULVvjlISGZYOCdCVPUgupxkjxY6xqnpJjpWue/wD8AZB6sny67J3YAAAAAElFTkSuQmCC" />
                        </a>
                        <a
                            href="https://www.facebook.com/agenciatropadigital"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAC50lEQVRYhc2YXYhNURTHf3Nnxpg0TYjJDGp8PUyJmiSawkg+iwhPzCgzHoQHUUaiyEdJvvKANy/KMKkR4UHjQT6iiYYilAdlkK8iDFrTOnXa9j13732uGf+63Xv3WXvt3zl77bP2XgXta+oI0BRgKjAJqAFGA+XAZ+AV8BjoBG4Dt3zdF3nYVgFrgRUKYlMZUKnAkZ4CrcBp4LnLQBkHmxLgAPAM2JUAlE3jgW0Kd1ifaCqoGUAXsBUY6AljG2uTTu3CUKgNwA1gTEoYUyOAdmC7L9Qe4GieYWxjHLddsAX6xqS7cNA9XYE/1P8gYAgwGSg2uq8H3mqsZoWaBhwJhNkPnEpYYdJebWnfCdwFLtmgBsQveGoucDVHl98J19qA4cAHjJg6BAwOAGpxADLHMiXTetI0rND59dVHYJ9jn+85ri8HxhGbvi0BQCQ8oaHAKr3ZAm2rcPC3A2iIoBoDoTotbaXAA2BUgL+VQLNMX53eWYi+WPrUBgKhKW2eQNUHOiBL8Jam8Ceqz+idharQ0q8nJVStQE1I4aDM0laSwp+oSgJ9mKOxbOCajaX90GInaWaZ8bKUvdgxx3HKizy2JF+Bsw523cAFo63aA6o4o4nTRYUpgnimh22PQL336JCUv5JU5WH7SaBeOBrLqvoWCFXpYftGYuo+MNvBWFbaQZ3uAv3IDvKmYTdWF0T0VOV7kQdUZ5E6dcl9Ek+bjbZfFqga3dOHqkOm75pDBs+mbku7LfX4qD2jcXIupaN8SR7Quyh37f1PoHYTS6hdKbbC+dKdKD7jWb6pn6Eaoh9xqNfA6v7h6V39T6I/5n7oTHwD30dq0/cf2aBE64CLfQTUASw1G7Mde5Zo6eZfqlULKH8p6SzWFHjsclGLHqmsylUKOgFMBC7nCUaqONNznRVdimaPgAXAHOA88DN2zVYAsxVNrgCLgVku5Uaf8uJ1/YzU2sF84KXFTqCl6icvQwlkSR1OZcVeAX8Ajq9+x3JiOMsAAAAASUVORK5CYII=" />
                        </a>
                    </div>
                </div>

                <div className="powered">
                    <span>
                        <b>Tropa Digital</b> • Copyright © 2023 - Todos os
                        direitos reservados.
                    </span>
                </div>
            </ContainerCenter>
        </FooterContainer>
    );
};

export default Footer;
