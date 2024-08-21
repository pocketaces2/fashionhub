FROM ruby:3.1

WORKDIR /app

RUN apt-get update -qq && apt-get install -y nodejs

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]