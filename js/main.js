    $(document).ready(function () {
        $('.slider').on('init reInit afterChange', function (event, slick, currentSlide) {

            if (!currentSlide) {
                $('.slide-count').text('1 / ' + slick.slideCount);
                $('.slide-name').text('mortal kombat');
                $('.banner-titulo').text('mortal kombat');
                $('.banner-preco').html('R$ 299<span class="banner-preco-span">,99</span>');
                $('.banner-descricao').text(
                    'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.'
                );

            } else {
                var currentSlide = $('.slider').slick('slickCurrentSlide');
                $('.slide-count').text((currentSlide + 1) + ' / ' + slick.slideCount);

                switch (currentSlide) {
                    case 1:
                        $('.slide-name').text('mortal kombat');
                        $('.banner-titulo').text('mortal kombat');
                        $('.banner-preco').html('R$ 299<span class="banner-preco-span">,99</span>');
                        $('.banner-descricao').text(
                            'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.'
                        );
                    case 2:
                        $('.slide-name').text('red dead redemption II');
                        $('.banner-titulo').text('red dead redemption II');
                        $('.banner-preco').html('R$ 189<span class="banner-preco-span">,49</span>');
                        $('.banner-descricao').text(
                            'Ambientado no final do século XIX e início do século XX, o Red Dead conta a história do bandido John Marston, que é chantageado por agentes federais que além disso, têm a sua família ameaçada. É um dos melhores jogos do gênero de aventura nos últimos anos.'
                        );

                }
            }
        });

        $('.slider').slick({
            arrows: true,
            prevArrow: $('.left-arrow'),
            nextArrow: $('.right-arrow')
        });
        
    });